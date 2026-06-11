"""
convert_bls.py — One-time conversion of BLS 4.0 XLSX → data/ingredients/bls.json

Extracts per food item:
  code       : BLS food code (e.g. "C131000")
  name_de    : German name
  name_en    : English name
  kcal       : Energy kcal/100g  (col G)
  protein_g  : Protein g/100g    (col M)
  fat_g      : Fat g/100g        (col P)
  carbs_g    : Carbohydrates g/100g (col S)

Run:
  pip install openpyxl
  python scripts/convert_bls.py
"""

import json
import os
import openpyxl

XLSX_PATH = os.path.join(os.path.dirname(__file__), '..', 'BLS_4_0_2025_DE', 'BLS_4_0_Daten_2025_DE.xlsx')
OUT_PATH  = os.path.join(os.path.dirname(__file__), '..', 'data', 'ingredients', 'bls.json')

# Confirmed column indices (1-based, matching A=1, B=2, ...)
COL_CODE     = 1   # A — BLS Code
COL_NAME_DE  = 2   # B — German name
COL_NAME_EN  = 3   # C — English name
COL_KCAL     = 7   # G — kcal/100g
COL_PROTEIN  = 13  # M — Protein g/100g
COL_FAT      = 16  # P — Fat g/100g
COL_CARBS    = 19  # S — Carbohydrates g/100g

def to_float(val):
    try:
        return round(float(val), 2) if val is not None else None
    except (ValueError, TypeError):
        return None

print(f'Reading {XLSX_PATH} ...')
wb = openpyxl.load_workbook(XLSX_PATH, read_only=True, data_only=True)
ws = wb.active

items = []
skipped = 0

for i, row in enumerate(ws.iter_rows(min_row=2, values_only=True)):
    code    = row[COL_CODE - 1]
    name_de = row[COL_NAME_DE - 1]
    name_en = row[COL_NAME_EN - 1]
    kcal    = to_float(row[COL_KCAL - 1])
    protein = to_float(row[COL_PROTEIN - 1])
    fat     = to_float(row[COL_FAT - 1])
    carbs   = to_float(row[COL_CARBS - 1])

    if not code or not name_de:
        skipped += 1
        continue

    items.append({
        'code':      str(code).strip(),
        'name_de':   str(name_de).strip(),
        'name_en':   str(name_en).strip() if name_en else '',
        'kcal':      kcal,
        'protein_g': protein,
        'fat_g':     fat,
        'carbs_g':   carbs,
    })

wb.close()

os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
with open(OUT_PATH, 'w', encoding='utf-8') as f:
    json.dump(items, f, ensure_ascii=False, separators=(',', ':'))

print(f'Done. {len(items)} items written to {OUT_PATH}')
if skipped:
    print(f'Skipped {skipped} empty rows.')
