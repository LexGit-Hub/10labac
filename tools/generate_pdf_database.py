#!/usr/bin/env python3
import os
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PDF_DIR = ROOT / 'pdfs'
OUT_FILE = ROOT / 'pdf-database.auto.js'

def walk_pdfs(root: Path):
    for p in root.rglob('*.pdf'):
        yield p

def to_url(p: Path):
    return '/' + p.relative_to(ROOT).as_posix()

def make_key(parts):
    # parts: ['pdfs','profile','year','session',...]
    profile = parts[1] if len(parts) > 1 else 'unknown'
    year = parts[2] if len(parts) > 2 else 'unknown'
    session = parts[3] if len(parts) > 3 else 'unknown'
    return f"{profile}_{year}_{session}"

def title_from_filename(name: str):
    return ' '.join(Path(name).stem.replace('_', ' ').replace('-', ' ').split())

def human_size(n):
    if n < 1024:
        return f"{n} B"
    if n < 1024*1024:
        return f"{n/1024:.1f} KB"
    return f"{n/1024/1024:.2f} MB"

def generate():
    db = {}
    if not PDF_DIR.exists():
        print('No pdfs/ directory found, writing empty auto database.')
    else:
        for p in walk_pdfs(PDF_DIR):
            rel = p.relative_to(ROOT)
            parts = rel.parts
            if len(parts) < 5:
                # Expect at least pdfs/profile/year/session/file.pdf
                continue
            key = make_key(parts)
            filename = p.name
            stat = p.stat()
            entry = {
                'id': f"{key}_{Path(filename).stem}",
                'title': title_from_filename(filename),
                'description': f"Auto-detected PDF: {filename}",
                'url': to_url(p),
                'date': p.stat().st_mtime and Path('').as_posix() or '',
                'size': human_size(stat.st_size),
                'category': parts[3] if len(parts) > 3 else 'Document',
                'isPlaceholder': False
            }
            db.setdefault(key, []).append(entry)

    out = 'var pdfDatabaseAuto = ' + json.dumps(db, indent=2, ensure_ascii=False) + ';\n'
    OUT_FILE.write_text(out, encoding='utf8')
    print('Wrote', OUT_FILE)

if __name__ == '__main__':
    generate()
