import re

filepath = 'g:/Mi unidad/Proyectos_Antigravity/InstrumentacionB/public/laboratorio_virtual_filtros_ruido.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update CSS to make global-tooltip fixed
css_replacement = """
.info-btn { display:inline-flex; align-items:center; justify-content:center; width:18px; height:18px; border-radius:50%; background:var(--p); color:#fff; font-size:12px; font-weight:bold; cursor:help; margin-left:8px; vertical-align:middle; line-height:1; }
#global-tooltip { position:fixed; width:300px; background:var(--card); color:var(--ink); border:1px solid var(--p); border-radius:8px; padding:12px; font-size:13px; font-weight:normal; box-shadow:0 10px 25px rgba(0,0,0,0.3); opacity:0; visibility:hidden; transition:opacity 0.2s; z-index:10000; pointer-events:none; text-align:left; line-height:1.4; white-space:normal; }
#global-tooltip.visible { opacity:1; visibility:visible; }
#global-tooltip::after { content:''; position:absolute; top:50%; right:100%; margin-top:-6px; border-width:6px; border-style:solid; border-color:transparent var(--p) transparent transparent; }
#global-tooltip b { color:var(--p); }
"""
# Replace the previous CSS I added
content = re.sub(r'\.info-btn \{.*?\n\.info-balloon b \{.*?\}', css_replacement.strip(), content, flags=re.DOTALL)

# 2. Change all <div class="info-btn">i<div class="info-balloon">...</div></div> to data-tooltip
def replace_tooltip(match):
    html_content = match.group(1).replace('"', '&quot;')
    return f'<div tabindex="0" class="info-btn" data-tooltip="{html_content}">i</div>'

content = re.sub(r'<div tabindex="0" class="info-btn">i<div class="info-balloon">(.*?)</div></div>', replace_tooltip, content)

# 3. Add the global tooltip div and JS right before closing body
js = """
<div id="global-tooltip"></div>
<script>
const gt = document.getElementById('global-tooltip');
document.querySelectorAll('.info-btn').forEach(btn => {
  btn.onmouseenter = () => {
    gt.innerHTML = btn.dataset.tooltip;
    const rect = btn.getBoundingClientRect();
    // Position to the right of the button
    gt.style.left = (rect.right + 15) + 'px';
    gt.style.top = (rect.top + rect.height / 2) + 'px';
    gt.style.transform = 'translateY(-50%)';
    gt.classList.add('visible');
  };
  btn.onmouseleave = () => gt.classList.remove('visible');
  btn.onfocus = btn.onmouseenter;
  btn.onblur = btn.onmouseleave;
});
</script>
"""
if '<div id="global-tooltip">' not in content:
    content = content.replace('</body>', js + '\n</body>')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Global tooltips added!")
