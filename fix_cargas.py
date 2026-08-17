import re

filepath = 'g:/Mi unidad/Proyectos_Antigravity/InstrumentacionB/public/simulador_cargas_campo_electrico.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Fix CSS
new_css = """*{box-sizing:border-box}
html,body{margin:0;height:100%;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;background:var(--bg);color:var(--ink);display:flex;flex-direction:column;overflow:hidden}
header{padding:18px clamp(16px,4vw,32px);background:linear-gradient(135deg,#0a2e5c,#154f91);color:#fff;flex:0 0 auto}
header h1{margin:.25rem 0;font-size:clamp(1.5rem,3vw,2.2rem)}
header p{margin:0;max-width:980px;opacity:.92;font-size:0.9rem}
.app{display:grid;grid-template-columns:minmax(0,1fr) 350px;flex:1;height:0}
.stage-wrap{position:relative;min-width:0;background:#02070d}
canvas{display:block;width:100%;height:100%;touch-action:none}"""

content = re.sub(r'\*\{box-sizing:border-box\}.*?touch-action:none\}', new_css.replace('\n', ''), content, flags=re.DOTALL)


# 2. Fix JS tool deselection
js_search = "if(selectedTool==='positive')addCharge(p.x,p.y,1e-9);if(selectedTool==='negative')addCharge(p.x,p.y,-1e-9);if(selectedTool==='sensor')addSensor(p.x,p.y)});"

js_replace = "if(selectedTool){if(selectedTool==='positive')addCharge(p.x,p.y,1e-9);if(selectedTool==='negative')addCharge(p.x,p.y,-1e-9);if(selectedTool==='sensor')addSensor(p.x,p.y);selectedTool=null;document.querySelectorAll('.tool').forEach(x=>x.style.outline='none');}});"

content = content.replace(js_search, js_replace)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixes applied successfully!")
