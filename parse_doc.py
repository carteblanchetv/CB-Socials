import zipfile, xml.etree.ElementTree as ET, json

docx_path = r'C:\Users\lizzy\.gemini\antigravity\scratch\social_management\assets\TEASER COPY 2026 MASTER DOC.docx'

with zipfile.ZipFile(docx_path) as z:
    with z.open('word/document.xml') as f:
        content = f.read().decode('utf-8')

root = ET.fromstring(content)
ns = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'

paragraphs = []
for para in root.iter('{' + ns + '}p'):
    ppr = para.find('{' + ns + '}pPr')
    pstyle = None
    if ppr is not None:
        style_el = ppr.find('{' + ns + '}pStyle')
        if style_el is not None:
            pstyle = style_el.get('{' + ns + '}val')

    runs = []
    is_bold_para = False
    for r in para.iter('{' + ns + '}r'):
        rpr = r.find('{' + ns + '}rPr')
        bold = rpr is not None and rpr.find('{' + ns + '}b') is not None
        text_el = r.find('{' + ns + '}t')
        if text_el is not None and text_el.text:
            runs.append(text_el.text)
            if bold:
                is_bold_para = True

    full_text = ''.join(runs).strip()
    # Clean up encoding artifacts
    full_text = full_text.replace('\u2019', "'").replace('\u2018', "'")
    full_text = full_text.replace('\u201c', '"').replace('\u201d', '"')
    full_text = full_text.replace('\u2026', '...').replace('\u2013', '-').replace('\u2014', '-')
    full_text = full_text.replace('\ufffd', '').replace('\u00a0', ' ')
    
    if full_text:
        paragraphs.append({
            't': full_text,
            'b': is_bold_para,
            's': pstyle
        })

# Parse into structured stories
stories = []
current_date = None
current_story = None
date_import = r'^\d{1,2}\s+[A-Z]+\s+\d{4}$'

import re

def looks_like_date(text):
    return bool(re.match(r'^\d{1,2}\s+[A-Z]+\s+\d{4}$', text.strip()))

def is_story_title(p):
    # Story titles: Heading3 style OR all-caps short line that isn't a date
    if p['s'] == 'Heading3':
        return True
    text = p['t'].strip()
    if text == text.upper() and len(text) < 80 and not p['b'] and not looks_like_date(text):
        return True
    return False

def is_tx_date(p):
    return (p['b'] and p['s'] == 'Heading1') or (p['b'] and looks_like_date(p['t']))

def is_legal_note(p):
    return p['b'] and not is_tx_date(p) and not is_story_title(p)

skip_phrases = ['FOR LATER', 'BEST OF 2025', 'MASTER DOC', 'TEASER COPY']

for p in paragraphs:
    text = p['t'].strip()
    
    # Skip header/meta lines
    if any(skip in text for skip in skip_phrases):
        continue
    
    if is_tx_date(p):
        current_date = text
        current_story = None
    elif is_story_title(p) and current_date:
        if current_story:
            stories.append(current_story)
        current_story = {
            'txDate': current_date,
            'title': text,
            'legalNote': '',
            'copyVersions': []
        }
    elif current_story:
        if is_legal_note(p):
            current_story['legalNote'] = text
        else:
            # It's a copy version
            current_story['copyVersions'].append(text)

if current_story:
    stories.append(current_story)

print('Parsed', len(stories), 'stories')
print()
for s in stories[:8]:
    print('TX:', s['txDate'])
    print('Title:', s['title'])
    if s['legalNote']:
        print('Legal:', s['legalNote'])
    print('Copies:', len(s['copyVersions']))
    for i, cv in enumerate(s['copyVersions']):
        print('  Copy', i+1, ':', cv[:80])
    print()

# Output as JSON for use in JS seed data
with open('parsed_stories.json', 'w', encoding='utf-8') as f:
    json.dump(stories, f, ensure_ascii=False, indent=2)
print('Written to parsed_stories.json')
