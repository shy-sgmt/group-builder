const $=id=>document.getElementById(id);

const uiSettings={
  theme:'dark',
  language:'en',
  deskColumns:4,
  cardScale:100,
  deskGap:8,
  numericDisplay:'color',
    numericBalanceScale:30,
  categoryBalanceScale:500,
  numericClusterScale:30,
  categoryClusterScale:500,
  pairRulesEnabled:false
};



function syncLanguageControl(){
  const el=$('languageSelect');
  if(el) el.value=uiSettings.language||'en';
}

function syncAdvancedOptimizationControls(){
  const panel=$('advancedOptimizationPanel');
  if(panel) panel.style.display='block';

  const pairs=[
    ['numericBalanceScale','numericBalanceScaleNumber','numericBalanceScale'],
    ['categoryBalanceScale','categoryBalanceScaleNumber','categoryBalanceScale'],
    ['numericClusterScale','numericClusterScaleNumber','numericClusterScale'],
    ['categoryClusterScale','categoryClusterScaleNumber','categoryClusterScale']
  ];
  pairs.forEach(([rangeId,numId,key])=>{
    const range=$(rangeId), num=$(numId);
    if(range) range.value=uiSettings[key];
    if(num) num.value=uiSettings[key];
  });
}


const I18N={
  en:{
    subtitle:'Constraint-aware group formation',
    settingsTitle:'Settings', close:'Close',
    importTitle:'Import', openFile:'📂 Open Excel / CSV', templateBtn:'Template', noFile:'No file selected',
    importHelp:'Row 1 = field names, Row 2 = types, Row 3+ = data.', typesLabel:'Types:',
    members:'Members', membersHelp:'View mode for review. Use Edit to modify data.', view:'View', edit:'Edit',
    addField:'+ Field', addMember:'+ Member', sampleBtn:'Sample', autoBalance:'Auto Balance',
    display:'Display', displayHelp:'Choose one attribute to show on each card.',
    previewAsc:'Preview ↑', previewDesc:'Preview ↓', apply:'Apply', original:'Original', undo:'Undo',
    previewHelp:'Preview sorting by the displayed attribute. Apply commits the preview.',
    displayRule:'Name + one selected attribute', memberSearch:'Search member...', clear:'Clear',
    pairRules:'Pair Rules', keepApart:'Keep apart', keepTogether:'Keep together', required:'Required',
    veryStrong:'Very strong', strong:'Strong', light:'Light', add:'Add',
    saveTitle:'Save & Load', saveAs:'Save As', openProject:'Open Project',
    saveHelp:'Save members, rules, group assignments, positions, and locks in one project file.',
    exportCsv:'Export CSV', printView:'Print View',
    localData:'Local Data',
    localDataHelp:'Clears locally saved UI settings from this browser. Project files and templates are not deleted.',
    clearLocalData:'Clear Local Data',
    clearLocalConfirm:'Clear all locally saved Group Builder settings in this browser?',
    localDataCleared:'Local data cleared.',
    general:'General Settings', generalHelp:'Appearance, grouping, and optimization',
    language:'Language', english:'English', japanese:'Japanese', theme:'Theme',
    themeDark:'Dark', themeLight:'Light', themeSystem:'System', themeGraphite:'Graphite',
    themeNavy:'Navy', themePaper:'Paper', themeForest:'Forest', themeWarm:'Warm',
    advancedOptimization:'Advanced Optimization', advancedHelp:'Usually leave these at the defaults.',
    numericBalance:'Numeric · Balance', categoryBalance:'Category · Balance',
    numericOrdinalCluster:'Numeric / Ordinal · Cluster', categoryBooleanCluster:'Category / Boolean · Cluster',
    resetDefaults:'Reset defaults', advancedDefaults:'Default: Numeric 30 / Category 500',
    numericDisplay:'Numeric Display', bar:'Bar', color:'Color',
    numericDisplayHelp:'Choose how numeric attributes are visualized.',
    pairRulesHelp:'Enable rules that keep selected members together or apart',
    groupSettings:'Group Settings', numberOfGroups:'Number of groups',
    allowedSizeDifference:'Allowed size difference', groupSettingsHelp:'Usually configured before building groups.',
    groupNames:'Group names', groupNamesHelp:'Examples: Team A / Group Blue / Sales A',
    columnsPerGroup:'Columns per group', cardSize:'Card size', cardGap:'Card gap',
    groupBuild:'GROUP BUILD', clearLayout:'Clear layout', addGroup:'+ Add Group', computingEllipsis:'Computing…',
    renameGroup:'Rename group', sizeDiffHelp:'Maximum allowed difference in member count between groups.',
    addFieldTitle:'Add Field', addFieldHelp:'Add a new column to the member table.',
    fieldName:'Field name', fieldPlaceholder:'Examples: Height, Department, Years of experience', type:'Type',
    typeCategory:'category — categorical', typeNumeric:'numeric — continuous numeric',
    typeOrdinal:'ordinal — ordered scale', typeBoolean:'boolean — Yes / No', typeIgnore:'ignore — reference only',
    cancel:'Cancel',
    atLeastOneGroup:'At least one group is required.', groupDeleted:'Group deleted',
    optimizationReset:'Optimization scales reset', simpleTemplateLoaded:'Simple template loaded',
    membersWord:'members', slotsWord:'slots', fixedWord:'fixed', averageWord:'avg',
    noPreview:'No preview available.', selectDisplay:'Select a display attribute.', noMembers:'Add members first.',
    cannotCreateGroups:'Cannot create more groups than members.',
    manyGroupsConfirm:'Many groups may result in single-member groups. Continue?',
    optimizing:'Optimizing…', searching:'Searching…', built:'Groups built.',
    hardViolation:'Some required constraints remain unsatisfied.', computing:'Computing',
    addSlot:'+ Add slot', unlock:'Unlock', lock:'Lock', fixedLabel:'Fixed',
    projectOpenFailed:'Could not open the project file.', fieldNameRequired:'Enter a field name.',
    duplicateField:'A field with the same name already exists.', fieldAdded:'Field added.',
    deleteColumn:'Delete column',
    deleteColumnConfirm:'Delete this column? This cannot be undone with the current table data.',
    chooseTwo:'Select two different members.', missingHeader:'No header row found.',
    selectedFile:'Selected:', loadedMembers:'members loaded.', loadFailed:'Failed to load file.',
    none:'None',
    deleteGroupConfirm:'This group contains members. Deleting it will leave them unassigned. Continue?',
    deleteGroup:'Delete group',
    categoryDesc:'ratio', numericDesc:'mean', ordinalDesc:'level distribution', booleanDesc:'count', ignoreDesc:'not optimized',
    balanceRangeWarning:'Enter a value from -20 to +20.'
  },
  ja:{
    subtitle:'属性を考慮したグループ編成',
    settingsTitle:'設定', close:'閉じる',
    importTitle:'インポート', openFile:'📂 Excel / CSVを開く', templateBtn:'テンプレート', noFile:'ファイル未選択',
    importHelp:'1行目＝項目名、2行目＝型、3行目以降＝データです。', typesLabel:'型:',
    members:'メンバー', membersHelp:'通常は確認用です。編集するときは「編集」に切り替えます。', view:'表示', edit:'編集',
    addField:'+ 項目', addMember:'+ メンバー', sampleBtn:'サンプル', autoBalance:'自動バランス',
    display:'カード表示', displayHelp:'カードに表示する属性を1つ選びます。',
    previewAsc:'昇順プレビュー ↑', previewDesc:'降順プレビュー ↓', apply:'適用', original:'元に戻す', undo:'元に戻す',
    previewHelp:'表示中の属性で一時的に並び替えます。「適用」で現在の並びを確定します。',
    displayRule:'名前 + 選択した属性を1つ表示', memberSearch:'メンバーを検索...', clear:'クリア',
    pairRules:'ペアルール', keepApart:'別グループにする', keepTogether:'同じグループにする', required:'必須',
    veryStrong:'かなり強い', strong:'強い', light:'弱い', add:'追加',
    saveTitle:'保存・読み込み', saveAs:'名前を付けて保存', openProject:'プロジェクトを開く',
    saveHelp:'メンバー、ルール、グループ分け、配置、固定状態を1つのプロジェクトファイルに保存します。',
    exportCsv:'CSV出力', printView:'印刷表示',
    localData:'ローカルデータ',
    localDataHelp:'このブラウザに保存された言語・テーマ・表示・最適化設定を消去します。保存済みプロジェクトやテンプレートは削除しません。',
    clearLocalData:'ローカルデータを消去',
    clearLocalConfirm:'このブラウザに保存されたGroup Builderの設定をすべて消去しますか？',
    localDataCleared:'ローカルデータを消去しました。',
    general:'一般設定', generalHelp:'表示・グループ・最適化の設定',
    language:'言語', english:'英語', japanese:'日本語', theme:'テーマ',
    themeDark:'ダーク', themeLight:'ライト', themeSystem:'システム', themeGraphite:'グラファイト',
    themeNavy:'ネイビー', themePaper:'ペーパー', themeForest:'フォレスト', themeWarm:'ウォーム',
    advancedOptimization:'詳細な最適化', advancedHelp:'通常は既定値のままで問題ありません。',
    numericBalance:'数値・バランス', categoryBalance:'カテゴリ・バランス',
    numericOrdinalCluster:'数値 / 順序・クラスタ', categoryBooleanCluster:'カテゴリ / 真偽値・クラスタ',
    resetDefaults:'既定値に戻す', advancedDefaults:'既定値: 数値 30 / カテゴリ 500',
    numericDisplay:'数値の表示方法', bar:'バー', color:'カラー',
    numericDisplayHelp:'数値属性をバーまたはカラーで表示します。',
    pairRulesHelp:'特定のメンバーを同じグループ、または別グループにするルールを使用します',
    groupSettings:'グループ設定', numberOfGroups:'グループ数',
    allowedSizeDifference:'許容する人数差', groupSettingsHelp:'通常はグループ作成前に設定します。',
    groupNames:'グループ名', groupNamesHelp:'例: Aチーム / 青グループ / 営業A',
    columnsPerGroup:'グループ内の列数', cardSize:'カードサイズ', cardGap:'カード間隔',
    groupBuild:'グループ作成', clearLayout:'配置をクリア', addGroup:'+ グループを追加', computingEllipsis:'計算中…',
    renameGroup:'グループ名を変更', sizeDiffHelp:'グループ間で許容する人数差の最大値です。',
    addFieldTitle:'項目を追加', addFieldHelp:'メンバー表に新しい列を追加します。',
    fieldName:'項目名', fieldPlaceholder:'例: 身長、部署、経験年数', type:'型',
    typeCategory:'category — カテゴリ', typeNumeric:'numeric — 連続数値',
    typeOrdinal:'ordinal — 順序尺度', typeBoolean:'boolean — はい / いいえ', typeIgnore:'ignore — 参照のみ',
    cancel:'キャンセル',
    atLeastOneGroup:'少なくとも1グループ必要です。', groupDeleted:'グループを削除しました',
    optimizationReset:'最適化係数を既定値に戻しました', simpleTemplateLoaded:'簡易テンプレートを読み込みました',
    membersWord:'人', slotsWord:'枠', fixedWord:'固定', averageWord:'平均',
    noPreview:'プレビューがありません。', selectDisplay:'表示項目を選んでください。', noMembers:'メンバーを追加してください。',
    cannotCreateGroups:'メンバー数より多いグループは作成できません。',
    manyGroupsConfirm:'1人だけのグループが多くなる可能性があります。続けますか？',
    optimizing:'最適化中…', searching:'探索中…', built:'グループを作成しました。',
    hardViolation:'必須条件の違反が残っています。', computing:'計算中',
    addSlot:'+ 枠を追加', unlock:'固定解除', lock:'固定', fixedLabel:'固定',
    projectOpenFailed:'プロジェクトファイルを開けませんでした。', fieldNameRequired:'項目名を入力してください。',
    duplicateField:'同じ項目名があります。', fieldAdded:'項目を追加しました。',
    deleteColumn:'列を削除',
    deleteColumnConfirm:'この列を削除しますか？現在の表データからも削除されます。',
    chooseTwo:'異なる2人を選んでください。', missingHeader:'ヘッダーがありません。',
    selectedFile:'選択中:', loadedMembers:'人を読み込みました。', loadFailed:'読み込みに失敗しました。',
    none:'表示なし',
    deleteGroupConfirm:'このグループにはメンバーがいます。削除すると未配置になります。続けますか？',
    deleteGroup:'グループを削除',
    categoryDesc:'比率', numericDesc:'平均', ordinalDesc:'段階分布', booleanDesc:'人数', ignoreDesc:'最適化なし',
    balanceRangeWarning:'-20〜+20の範囲で入力してください。'
  }
};

function tr(key){
  const lang=uiSettings.language||'en';
  return I18N[lang]?.[key] ?? I18N.en[key] ?? key;
}


function setLanguage(lang){
  uiSettings.language=(lang==='ja')?'ja':'en';
  localStorage.setItem('group-builder-ui-settings',JSON.stringify(uiSettings));
  if($('languageSelect')) $('languageSelect').value=uiSettings.language;
  renderAll();
  applyUiSettings();
  applyLanguage();
}

function applyLanguage(){
  const lang=(uiSettings.language==='ja')?'ja':'en';
  document.documentElement.lang=lang;

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;
    const value=I18N[lang]?.[key];
    if(value!==undefined) el.textContent=value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key=el.dataset.i18nPlaceholder;
    const value=I18N[lang]?.[key];
    if(value!==undefined) el.placeholder=value;
  });

  const settingsBtn=$('settingsBtn');
  if(settingsBtn){
    settingsBtn.title=lang==='ja'?'設定':'Settings';
    settingsBtn.setAttribute('aria-label',settingsBtn.title);
  }

  const fileName=$('fileName');
  if(fileName && !fileName.dataset.userValue){
    fileName.textContent=tr('noFile');
  }
}

function applyUiSettings(){
  if($('languageSelect')) $('languageSelect').value=uiSettings.language||'en';
  syncLanguageControl();
  applyLanguage();
  syncAdvancedOptimizationControls();
  document.documentElement.dataset.theme=uiSettings.theme;
  document.documentElement.style.setProperty('--desk-cols',uiSettings.deskColumns);
  document.documentElement.style.setProperty('--desk-gap',uiSettings.deskGap+'px');
  document.documentElement.style.setProperty('--card-scale',uiSettings.cardScale/100);

  if($('themeSelect')) $('themeSelect').value=uiSettings.theme;
  if($('numericDisplay')) $('numericDisplay').value=uiSettings.numericDisplay||'bar';
  if($('advancedOptimizationPanel')) $('advancedOptimizationPanel').style.display='block';
  const optPairs=[
    ['numericBalanceScale','numericBalanceScaleNumber','numericBalanceScale'],
    ['categoryBalanceScale','categoryBalanceScaleNumber','categoryBalanceScale'],
    ['numericClusterScale','numericClusterScaleNumber','numericClusterScale'],
    ['categoryClusterScale','categoryClusterScaleNumber','categoryClusterScale']
  ];
  optPairs.forEach(([rangeId,numId,key])=>{
    if($(rangeId)) $(rangeId).value=uiSettings[key];
    if($(numId)) $(numId).value=uiSettings[key];
  });

  if($('pairRulesEnabled')) $('pairRulesEnabled').checked=!!uiSettings.pairRulesEnabled;
  if($('pairRulesSection')) $('pairRulesSection').style.display=uiSettings.pairRulesEnabled?'block':'none';
  if($('deskColumns')) $('deskColumns').value=String(uiSettings.deskColumns);
  if($('cardScale')){
    $('cardScale').value=uiSettings.cardScale;
    $('cardScaleValue').textContent=uiSettings.cardScale+'%';
  }
  if($('deskGap')){
    $('deskGap').value=uiSettings.deskGap;
    $('deskGapValue').textContent=uiSettings.deskGap+'px';
  }
  renderGroupNameEditor();
  localStorage.setItem('group-builder-ui-settings',JSON.stringify(uiSettings));
}

function applyDeskLayout(){
  document.documentElement.style.setProperty('--desk-cols',uiSettings.deskColumns);
  document.documentElement.style.setProperty('--desk-gap',uiSettings.deskGap+'px');
  document.documentElement.style.setProperty('--card-scale',uiSettings.cardScale/100);
}

function loadUiSettings(){
  try{
    const saved=JSON.parse(localStorage.getItem('group-builder-ui-settings')||'null');
    if(saved){
      if(['dark','light','system','graphite','navy','paper','forest','warm'].includes(saved.theme)) uiSettings.theme=saved.theme;
      if(Number.isFinite(+saved.deskColumns)) uiSettings.deskColumns=+saved.deskColumns;
      if(Number.isFinite(+saved.cardScale)) uiSettings.cardScale=+saved.cardScale;
      if(Number.isFinite(+saved.deskGap)) uiSettings.deskGap=+saved.deskGap;
      if(['bar','color'].includes(saved.numericDisplay)) uiSettings.numericDisplay=saved.numericDisplay;
      if(saved && ['en','ja'].includes(saved.language)) uiSettings.language=saved.language;
      ['numericBalanceScale','categoryBalanceScale','numericClusterScale','categoryClusterScale'].forEach(k=>{
        if(Number.isFinite(Number(saved[k]))) uiSettings[k]=Number(saved[k]);
      });

      if(typeof saved.pairRulesEnabled==='boolean') uiSettings.pairRulesEnabled=saved.pairRulesEnabled;
    }
  }catch(_){}
  applyUiSettings();
}
function setSettingsOpen(open){
  const panel=$('settingsPanel');
  if(!panel)return;
  panel.classList.toggle('open',open);
  panel.setAttribute('aria-hidden',open?'false':'true');
}

let schema=[
  {key:'name',label:'Name',type:'id',weight:0,show:true},
  {key:'gender',label:'Gender',type:'category',weight:8,show:true}
];
let students=[];
let pairRules=[];
let assignment={};
let fixedStudents=new Set();
let classSlots={};
let lastEval=null;
let displayFieldKey='';

function uid(p='id'){return p+Math.random().toString(36).slice(2,9)}
function toast(m){$('toast').textContent=m;$('toast').classList.add('show');setTimeout(()=>$('toast').classList.remove('show'),1400)}
function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}


let groupsConfig=[]; // [{id,name}]

function makeGroupId(){
  if(crypto && crypto.randomUUID) return crypto.randomUUID();
  return 'g_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,8);
}
function ensureGroupsConfig(){
  const k=classCount();
  while(groupsConfig.length<k){
    const idx=groupsConfig.length;
    groupsConfig.push({id:makeGroupId(),name:`Group ${idx+1}`});
  }
  if(groupsConfig.length>k)groupsConfig=groupsConfig.slice(0,k);
}
function groupName(c){
  ensureGroupsConfig();
  return groupsConfig[c]?.name || `Group ${c+1}`;
}
function groupId(c){
  ensureGroupsConfig();
  return groupsConfig[c]?.id;
}

function addGroup(){
  ensureGroupsConfig();
  pushHistory?.();

  const newIndex=groupsConfig.length;
  groupsConfig.push({
    id:makeGroupId(),
    name:`Group ${newIndex+1}`
  });

  $('classCount').value=groupsConfig.length;
  classSlots[newIndex]=classSlots[newIndex]||[];
  renderClasses();
  updateStatus();
}

function renderGroupNameEditor(){
  const el=$('groupNameEditor');
  if(!el)return;
  ensureGroupsConfig();
  el.innerHTML='';
  groupsConfig.forEach((g,i)=>{
    const row=document.createElement('div');
    row.className='group-name-row';
    const input=document.createElement('input');
    input.value=g.name;
    input.placeholder=`Group ${i+1}`;
    input.addEventListener('input',e=>{
      g.name=e.target.value || `Group ${i+1}`;
      renderClasses();
    });
    const del=document.createElement('button');
    del.className='small group-delete';
    del.type='button';
    del.title=tr('deleteGroup');
    del.setAttribute('aria-label',tr('deleteGroup'));
    del.textContent='×';
    del.disabled=groupsConfig.length<=1;
    del.onclick=()=>removeGroup(i);
    row.appendChild(input);
    row.appendChild(del);
    el.appendChild(row);
  });
}
function removeGroup(index){
  ensureGroupsConfig();
  if(groupsConfig.length<=1){
    toast(tr('atLeastOneGroup'));
    return;
  }

  const removed=groupsConfig[index];
  if(!removed)return;

  const removedMemberIds=Object.entries(assignment)
    .filter(([,c])=>c===index)
    .map(([id])=>id);

  if(removedMemberIds.length){
    const ok=confirm(`「${removed.name}」: ${tr('deleteGroupConfirm')}`);
    if(!ok)return;
  }

  pushHistory?.();

  const oldCount=groupsConfig.length;
  groupsConfig.splice(index,1);

  const nextAssign={};
  for(const [id,c] of Object.entries(assignment)){
    if(c===index){
      fixedStudents.delete(id);
      continue;
    }
    nextAssign[id]=c>index?c-1:c;
  }
  assignment=nextAssign;

  const nextSlots={};
  for(let oldIndex=0;oldIndex<oldCount;oldIndex++){
    if(oldIndex===index)continue;
    const newIndex=oldIndex>index?oldIndex-1:oldIndex;
    nextSlots[newIndex]=(classSlots[oldIndex]||[]).filter(id=>!removedMemberIds.includes(id));
  }
  classSlots=nextSlots;

  $('classCount').value=groupsConfig.length;
  renderClasses();
  updateStatus();
  toast(tr('groupDeleted'));
}


function classCount(){
  const n=Math.floor(Number($('classCount')?.value)||1);
  return Math.max(1,Math.min(99,n));
}
function validStudents(){return students.filter(s=>String(s.values[nameKey()]??'').trim())}
function nameKey(){return schema.find(x=>x.type==='id')?.key || schema[0]?.key}
function studentName(s){return String(s?.values?.[nameKey()]??'')}
function studentById(id){return students.find(s=>s.id===id)}
function numeric(v){const x=parseFloat(v);return Number.isFinite(x)?x:0}
function slug(label,i){return 'f'+i+'_'+String(label).replace(/[^\w\u3040-\u30ff\u3400-\u9fff]/g,'_')}


let memberTableMode='view';

function setMemberTableMode(mode){
  memberTableMode=mode==='edit'?'edit':'view';
  document.body.classList.toggle('members-editing',memberTableMode==='edit');
  if($('viewModeBtn'))$('viewModeBtn').classList.toggle('active',memberTableMode==='view');
  if($('editModeBtn'))$('editModeBtn').classList.toggle('active',memberTableMode==='edit');
  renderStudents();
}

function normalizeType(t){
  t=String(t??'').trim().toLowerCase();
  if(['id','category','numeric','ordinal','boolean','ignore'].includes(t)) return t;
  return 'category';
}

function deleteSchemaColumn(key){
  const idx=schema.findIndex(c=>c.key===key);
  if(idx<0) return;
  const col=schema[idx];
  if(col.type==='id') return;

  const msg=(typeof tr==='function' ? tr('deleteColumnConfirm') : 'Delete this column?');
  if(!confirm(`${col.label}: ${msg}`)) return;

  schema.splice(idx,1);
  students.forEach(s=>{ if(s.values) delete s.values[key]; });

  if(displayFieldKey===key){
    displayFieldKey='';
    sortPreview=null;
  }

  renderAll();
}

function renderStudents(){
  const editing=memberTableMode==='edit';
  $('studentHead').innerHTML='<tr>'+schema.map(x=>{
    const canDelete=editing && x.type!=='id';
    const del=canDelete
      ? `<button class="column-delete" data-key="${esc(x.key)}" title="${typeof tr==='function'?tr('deleteColumn'):'Delete column'}" aria-label="${typeof tr==='function'?tr('deleteColumn'):'Delete column'}">×</button>`
      : '';
    return `<th><div class="column-head"><span class="column-title">${esc(x.label)}</span>${del}</div><div class="help">${x.type}</div></th>`;
  }).join('')+(editing?'<th class="member-delete-head"></th>':'')+'</tr>';

  if(editing){
    $('studentHead').querySelectorAll('.column-delete').forEach(btn=>{
      btn.onclick=e=>{
        e.stopPropagation();
        deleteSchemaColumn(btn.dataset.key);
      };
    });
  }
  $('studentBody').innerHTML='';

  students.forEach((s,idx)=>{
    const tr=document.createElement('tr');
    if(editing){
      tr.innerHTML=schema.map(col=>`<td><input data-k="${col.key}" value="${esc(s.values[col.key]??'')}"></td>`).join('')+`<td><button class="small delete-member">×</button></td>`;
      tr.querySelectorAll('input').forEach(inp=>inp.addEventListener('input',e=>{
        s.values[e.target.dataset.k]=e.target.value;
        updatePairSelects();
        renderDisplayLegend();
        if(displayFieldKey===e.target.dataset.k)renderClasses();
      }));
      tr.querySelector('.delete-member').onclick=()=>{
        students.splice(idx,1); delete assignment[s.id]; fixedStudents.delete(s.id); removeFromSlots(s.id);
        pairRules=pairRules.filter(r=>r.a!==s.id&&r.b!==s.id);
        renderAll();
      };
    }else{
      tr.innerHTML=schema.map(col=>{
        const v=s.values[col.key]??'';
        return `<td><span class="view-cell" title="${esc(v)}">${esc(v)}</span></td>`;
      }).join('');
    }
    $('studentBody').appendChild(tr);
  });
  updatePairSelects();
}
function renderAttrControls(){
  $('attrControls').innerHTML='';
  schema.filter(x=>x.type!=='id').forEach(col=>{
    const row=document.createElement('div'); row.className='attr-row';
    const desc=(uiSettings.language==='ja'
        ? {category:'比率',numeric:'平均',ordinal:'段階分布',boolean:'人数',ignore:'最適化なし'}
        : {category:'ratio',numeric:'mean',ordinal:'level distribution',boolean:'count',ignore:'not optimized'}
      )[col.type]||'';
    if(col.type==='ignore'){
      row.innerHTML=`<span>${esc(col.label)} <span class="attr-type">${col.type}</span><div class="help">${desc}</div></span><span class="help">—</span><span>0</span><span></span>`;
    }else{
      const w=Number(col.weight??8);
      row.innerHTML=`<span>${esc(col.label)} <span class="attr-type">${col.type}</span><div class="help">${desc}</div></span>
        <input class="balance-range" type="range" min="-20" max="20" step="1" value="${w}">
        <input class="balance-number" type="number" min="-20" max="20" step="1" value="${w}" aria-label="${esc(col.label)}">
        <span></span>`;

      const range=row.querySelector('.balance-range');
      const number=row.querySelector('.balance-number');

      const commitWeight=(raw)=>{
        const v=Number(raw);
        if(!Number.isFinite(v) || v < -20 || v > 20){
          alert(tr('balanceRangeWarning'));
          range.value=col.weight??8;
          number.value=col.weight??8;
          return;
        }
        col.weight=Math.round(v);
        range.value=col.weight;
        number.value=col.weight;
      };

      range.oninput=()=>commitWeight(range.value);
      number.onchange=()=>commitWeight(number.value);
      number.onkeydown=e=>{
        if(e.key==='Enter'){
          e.preventDefault();
          number.blur();
        }
      };
    }
    $('attrControls').appendChild(row);
  });
  renderDisplayFieldOptions();
}
function updatePairSelects(){
  const opts=validStudents().map(s=>`<option value="${s.id}">${esc(studentName(s))}</option>`).join('');
  $('pairA').innerHTML=opts;$('pairB').innerHTML=opts;
}
function renderPairRules(){
  $('pairList').innerHTML='';
  pairRules.forEach((r,i)=>{
    const a=studentById(r.a),b=studentById(r.b); if(!a||!b)return;
    const d=document.createElement('div');d.className='pair-item';
    d.innerHTML=`<span>${esc(studentName(a))} ↔ ${esc(studentName(b))}：${r.type==='apart'?tr('keepApart'):tr('keepTogether')}</span><span class="help">${r.weight>=10000?(uiSettings.language==='ja'?'絶対':'Required'):r.weight>=1000?(uiSettings.language==='ja'?'強++':'Very strong'):r.weight>=200?(uiSettings.language==='ja'?'強':'Strong'):(uiSettings.language==='ja'?'弱':'Light')}</span><button class="small">×</button>`;
    d.querySelector('button').onclick=()=>{pairRules.splice(i,1);renderPairRules();renderClasses()};
    $('pairList').appendChild(d);
  });
}
function displayableColumns(){ return schema.filter(x=>x.type!=='id'); }
function renderDisplayFieldOptions(){
  const sel=$('displayField'); if(!sel)return;
  const cols=displayableColumns(); const prev=displayFieldKey||sel.value;
  sel.innerHTML=`<option value="">${uiSettings.language==='ja'?'表示なし':'None'}</option>`+cols.map(c=>`<option value="${c.key}">${esc(c.label)}</option>`).join('');
  displayFieldKey=cols.some(c=>c.key===prev)?prev:(cols[0]?.key||''); sel.value=displayFieldKey; renderDisplayLegend();
}
function selectedDisplayColumn(){ return schema.find(c=>c.key===displayFieldKey)||null; }
function hashString(str){ let h=2166136261; for(const ch of String(str)){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)} return h>>>0; }
const categoricalPalette=[
  '#4E79A7','#F28E2B','#59A14F','#E15759',
  '#76B7B2','#B07AA1','#EDC948','#9C755F',
  '#FF9DA7','#79706E'
];
function categoryColor(v){ return categoricalPalette[hashString(v)%categoricalPalette.length]; }
function numericDomain(col){ const vals=validStudents().map(s=>parseFloat(s.values[col.key])).filter(Number.isFinite); return vals.length?{min:Math.min(...vals),max:Math.max(...vals)}:{min:0,max:1}; }
function numericColor(v,col){
  const x=parseFloat(v),d=numericDomain(col);
  if(!Number.isFinite(x))return {color:'#6b7280',t:0,min:d.min,max:d.max};
  const t=d.max===d.min ? .5 : Math.max(0,Math.min(1,(x-d.min)/(d.max-d.min)));
  const stops=[[68,1,84],[59,82,139],[33,145,140],[94,201,98],[253,231,37]];
  const p=t*(stops.length-1);
  const i=Math.min(stops.length-2,Math.floor(p));
  const f=p-i;
  const a=stops[i],b=stops[i+1];
  const rgb=a.map((n,k)=>Math.round(n+(b[k]-n)*f));
  return {color:`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`,t,min:d.min,max:d.max};
}
function cardColorFor(v,col){
  if(!col||v===''||v==null)return '#303640';
  if(col.type==='numeric')return numericColor(v,col).color;
  return categoryColor(String(v));
}
function renderDisplayLegend(){
 const el=$('displayLegend'); if(!el)return; const col=selectedDisplayColumn(); if(!col){el.innerHTML='';return;}
 if(col.type==='numeric'){ const d=numericDomain(col); el.innerHTML=`<div class="legend-title">${esc(col.label)}</div><div class="numeric-gradient"></div><div class="legend-range"><span>${esc(d.min)}</span><span>${esc(d.max)}</span></div>`; }
 else { const vals=[...new Set(validStudents().map(s=>String(s.values[col.key]??'').trim()).filter(Boolean))]; el.innerHTML=`<div class="legend-title">${esc(col.label)}</div><div class="legend-items">${vals.slice(0,16).map(v=>`<span class="legend-item"><i style="background:${categoryColor(v)}"></i>${esc(v)}</span>`).join('')}</div>`; }
}

let addingField=false;
const FIELD_TYPE_HELP={
  category:'文字カテゴリをグループごとに偏らないよう分散します。例：性別、部署、出身校',
  numeric:'連続数値のグループ平均を揃えます。例：点数、年齢、身長',
  ordinal:'順序のある段階の人数分布を揃えます。例：リーダー1〜5、経験レベル',
  boolean:'Yes / No の該当人数を各グループで揃えます。',
  ignore:'名簿には保持しますが、最適化には使いません。'
};

function setFieldModalOpen(open){
  const modal=$('fieldModal');
  if(!modal)return;
  modal.classList.toggle('open',open);
  modal.setAttribute('aria-hidden',open?'false':'true');
  if(open){
    $('newFieldName').value='';
    $('newFieldType').value='category';
    updateFieldTypeHelp();
    setTimeout(()=>$('newFieldName').focus(),0);
  }
}
function updateFieldTypeHelp(){
  const type=$('newFieldType')?.value||'category';
  if($('fieldTypeHelp'))$('fieldTypeHelp').textContent=FIELD_TYPE_HELP[type]||'';
}
function uniqueFieldKey(label){
  const base=String(label||'field')
    .trim()
    .toLowerCase()
    .replace(/\s+/g,'_')
    .replace(/[^\p{L}\p{N}_-]/gu,'') || 'field';
  let key=base;
  let n=2;
  const used=new Set(schema.map(c=>c.key));
  while(used.has(key)) key=`${base}_${n++}`;
  return key;
}
function appendFieldColumnToTable(col){
  if(memberTableMode!=='edit'){renderStudents();return;}
  const headRow=$('studentHead')?.querySelector('tr');
  if(headRow){
    const deleteTh=headRow.lastElementChild;
    const th=document.createElement('th');
    th.innerHTML=`${esc(col.label)}<div class="help">${col.type}</div>`;
    headRow.insertBefore(th,deleteTh);
  }
  const rows=$('studentBody')?.querySelectorAll('tr')||[];
  rows.forEach((tr,idx)=>{
    const deleteTd=tr.lastElementChild;
    const td=document.createElement('td');
    const inp=document.createElement('input');
    inp.dataset.k=col.key;
    inp.value='';
    inp.addEventListener('input',e=>{
      const s=students[idx];
      if(!s)return;
      s.values[col.key]=e.target.value;
      renderDisplayLegend();
      if(displayFieldKey===col.key)renderClasses();
    });
    td.appendChild(inp);
    tr.insertBefore(td,deleteTd);
  });
}

function addCustomField(){
  if(addingField)return;
  addingField=true;
  const addBtn=$('fieldModalAdd');
  if(addBtn){addBtn.disabled=true;addBtn.textContent='Adding…';}

  const finish=()=>{
    addingField=false;
    if(addBtn){addBtn.disabled=false;addBtn.textContent='Add field';}
  };

  const label=$('newFieldName').value.trim();
  const type=$('newFieldType').value;
  if(!label){toast(tr('fieldNameRequired'));finish();return;}
  if(schema.some(c=>String(c.label).trim()===label)){
    toast(tr('duplicateField'));finish();return;
  }

  const key=uniqueFieldKey(label);
  const col={key,label,type,weight:type==='ignore'?0:8};
  schema.push(col);
  students.forEach(s=>{
    if(!s.values)s.values={};
    s.values[key]='';
  });

  // 重要: renderAll() は呼ばない。追加した列だけ差分更新する。
  appendFieldColumnToTable(col);
  renderAttrControls();
  renderDisplayFieldOptions();

  displayFieldKey=key;
  if($('displayField'))$('displayField').value=key;
  renderDisplayLegend();

  setFieldModalOpen(false);
  finish();
  toast(`${label}: ${tr('fieldAdded')}`);
}

function renderAll(){renderStudents();renderAttrControls();renderPairRules();renderClasses();updateStatus()}
$('displayField').addEventListener('change',()=>{displayFieldKey=$('displayField').value;renderDisplayLegend();renderClasses();});
$('addStudent').onclick=()=>{
  const values={};schema.forEach(c=>values[c.key]='');
  students.push({id:uid('s'),values});renderStudents();
  applyLanguage();
};
$('addPair').onclick=()=>{
  const a=$('pairA').value,b=$('pairB').value;if(!a||!b||a===b)return toast(tr('chooseTwo'));
  pairRules.push({id:uid('r'),a,b,type:$('pairType').value,weight:+$('pairWeight').value});
  renderPairRules();renderClasses();
};

function parseAOA(aoa){
  const headers=(aoa[0]||[]).map(x=>String(x??'').trim());
  const types=(aoa[1]||[]).map(normalizeType);
  if(headers.length<1) throw new Error(tr('missingHeader'));
  schema=headers.map((h,i)=>{
    const type=types[i]||'category';
    return {key:slug(h,i),label:h||`列${i+1}`,type,weight:(type==='id'||type==='ignore'?0:8),show:type!=='ignore'};
  });
  if(!schema.some(x=>x.type==='id')) schema[0].type='id';
  displayFieldKey=schema.find(x=>x.type!=='id')?.key||'';
  students=[];
  for(let r=2;r<aoa.length;r++){
    const row=aoa[r]||[];
    if(row.every(v=>String(v??'').trim()==='')) continue;
    const values={};schema.forEach((c,i)=>values[c.key]=row[i]??'');
    students.push({id:uid('s'),values});
  }
  pairRules=[];assignment={};fixedStudents.clear();classSlots={};renderAll();
}
$('pickFile').onclick=()=>$('fileInput').click();
$('fileInput').onchange=async e=>{
  const f=e.target.files?.[0];if(!f)return;$('fileName').dataset.userValue='1'; $('fileName').textContent=tr('selectedFile')+' '+f.name;
  try{
    let aoa;
    if(f.name.toLowerCase().endsWith('.csv')){
      const txt=await f.text(); const wb=XLSX.read(txt,{type:'string'}); const ws=wb.Sheets[wb.SheetNames[0]];
      aoa=XLSX.utils.sheet_to_json(ws,{header:1,defval:''});
    }else{
      const buf=await f.arrayBuffer(); const wb=XLSX.read(buf,{type:'array'}); const ws=wb.Sheets[wb.SheetNames[0]];
      aoa=XLSX.utils.sheet_to_json(ws,{header:1,defval:''});
    }
    parseAOA(aoa);toast(`${students.length} ${tr('loadedMembers')}`);
  }catch(err){console.error(err);toast(tr('loadFailed'))}
  e.target.value='';
};
$('template').onclick=()=>{
  const ja=(uiSettings.language||'en')==='ja';
  const rows=ja ? [
    ['名前','性別','年代','経験年数'],
    ['id','category','category','numeric'],
    ['Aさん','男','30代',2],
    ['Bさん','女','20代',5],
    ['Cさん','男','40代',8],
    ['Dさん','女','30代',3],
    ['Eさん','男','20代',1],
    ['Fさん','女','40代',10],
    ['Gさん','男','30代',4],
    ['Hさん','女','20代',2]
  ] : [
    ['Name','Gender','Age range','Years of experience'],
    ['id','category','category','numeric'],
    ['A','Male','30s',2],
    ['B','Female','20s',5],
    ['C','Male','40s',8],
    ['D','Female','30s',3],
    ['E','Male','20s',1],
    ['F','Female','40s',10],
    ['G','Male','30s',4],
    ['H','Female','20s',2]
  ];
  parseAOA(rows);
  if(typeof setEditMode==='function') setEditMode(false);
  toast(tr('simpleTemplateLoaded'));
};
$('sample').onclick=()=>{
  const ja=(uiSettings.language||'en')==='ja';
  const rows=ja ? [
    ['名前','性別','リーダー','成績','要配慮','部活','備考'],
    ['id','category','ordinal','numeric','boolean','category','ignore'],
    ['田中 悠斗','男',5,88,'いいえ','サッカー',''],
    ['佐藤 美咲','女',2,72,'いいえ','吹奏楽',''],
    ['鈴木 蓮','男',4,94,'はい','野球','座席配慮'],
    ['高橋 結衣','女',3,81,'いいえ','美術','']
  ] : [
    ['Name','Gender','Leadership','Score','Needs support','Activity','Notes'],
    ['id','category','ordinal','numeric','boolean','category','ignore'],
    ['Alex','Male',5,88,'No','Soccer',''],
    ['Blair','Female',2,72,'No','Music',''],
    ['Casey','Male',4,94,'Yes','Baseball','Seating support'],
    ['Dana','Female',3,81,'No','Art','']
  ];
  parseAOA(rows);
};

function ensureSlots(){
  for(let c=0;c<classCount();c++){
    if(!Array.isArray(classSlots[c]))classSlots[c]=Array(12).fill('');
    while(classSlots[c].length<12)classSlots[c].push('');
  }
}
function locate(id){ensureSlots();for(let c=0;c<classCount();c++){const i=classSlots[c].indexOf(id);if(i>=0)return{c,i}}return null}
function removeFromSlots(id){const p=locate(id);if(p)classSlots[p.c][p.i]=''}
function reconcileSlots(){
  ensureSlots();const valid=new Set(validStudents().map(s=>s.id));
  for(let c=0;c<classCount();c++)classSlots[c]=classSlots[c].map(id=>(id&&valid.has(id)&&assignment[id]===c)?id:'');
  validStudents().forEach(s=>{
    const c=assignment[s.id];if(c===undefined)return;if(locate(s.id))return;
    let i=classSlots[c].findIndex(x=>!x);if(i<0){classSlots[c].push('');i=classSlots[c].length-1}
    classSlots[c][i]=s.id;
  });
}


let sortPreview=null; // {dir, fieldKey}

const historyStack=[];
const HISTORY_LIMIT=30;

function cloneLayoutState(){
  return {
    assignment:JSON.parse(JSON.stringify(assignment)),
    classSlots:JSON.parse(JSON.stringify(classSlots)),
    fixedStudents:[...fixedStudents]
  };
}
function pushHistory(){
  historyStack.push(cloneLayoutState());
  if(historyStack.length>HISTORY_LIMIT)historyStack.shift();
  updateUndoButton();
}
function updateUndoButton(){
  if($('undoBtn'))$('undoBtn').disabled=historyStack.length===0;
}
function undoLast(){
  const state=historyStack.pop();
  if(!state)return;
  assignment=state.assignment||{};
  classSlots=state.classSlots||{};
  fixedStudents=new Set(state.fixedStudents||[]);
  renderClasses();
  updateUndoButton();
  toast('Undone');
}

function moveToSlot(id,c,i){
  sortPreview=null;
  pushHistory();
  const src=locate(id);const occ=classSlots[c][i]||'';
  if(src){classSlots[src.c][src.i]=occ;if(occ)assignment[occ]=src.c}
  classSlots[c][i]=id;assignment[id]=c;renderClasses();
}
function toggleFixed(id){sortPreview=null;pushHistory();fixedStudents.has(id)?fixedStudents.delete(id):fixedStudents.add(id);renderClasses()}

function compareMembersForDisplay(a,b,dir){
  const col=selectedDisplayColumn();
  if(!col)return 0;
  const av=a?.values?.[col.key];
  const bv=b?.values?.[col.key];

  if(col.type==='numeric'||col.type==='ordinal'){
    const an=parseFloat(av),bn=parseFloat(bv);
    const aok=Number.isFinite(an),bok=Number.isFinite(bn);
    if(aok&&bok)return (an-bn)*dir;
    if(aok&&!bok)return -1;
    if(!aok&&bok)return 1;
  }
  return String(av??'').localeCompare(String(bv??''),'ja',{numeric:true,sensitivity:'base'})*dir;
}


function previewSlotsForGroup(c){
  const base=[...(classSlots[c]||[])];
  if(!sortPreview || sortPreview.fieldKey!==displayFieldKey)return base;

  const movableIndexes=[];
  const movableIds=[];

  for(let i=0;i<base.length;i++){
    const id=base[i];
    if(!id)continue;
    if(fixedStudents.has(id))continue;
    movableIndexes.push(i);
    movableIds.push(id);
  }

  movableIds.sort((a,b)=>
    compareMembersForDisplay(studentById(a),studentById(b),sortPreview.dir)
  );

  movableIndexes.forEach((slotIndex,j)=>{
    base[slotIndex]=movableIds[j]||'';
  });

  return base;
}

function applySortPreview(){
  if(!sortPreview){
    toast(tr('noPreview'));
    return;
  }

  pushHistory();

  for(let c=0;c<classCount();c++){
    classSlots[c]=previewSlotsForGroup(c);
  }

  sortPreview=null;
  renderClasses();
  updateUndoButton();
  toast('Preview order applied');
}

function sortByDisplayedField(dir=1){
  const col=selectedDisplayColumn();
  if(!col){toast(tr('selectDisplay'));return;}
  sortPreview={dir,fieldKey:col.key};
  renderClasses();
  toast(dir>0?'Preview: ascending':'Preview: descending');
}

function clearSortPreview(){
  sortPreview=null;
  renderClasses();
  toast('Original order');
}

function members(c,assign=assignment){return validStudents().filter(s=>assign[s.id]===c)}
function mean(arr,key){if(!arr.length)return 0;return arr.reduce((a,s)=>a+numeric(s.values[key]),0)/arr.length}
function variance(vals){if(!vals.length)return 0;const m=vals.reduce((a,b)=>a+b,0)/vals.length;return vals.reduce((a,b)=>a+(b-m)*(b-m),0)/vals.length}
function distributionPenalty(groups,key){
  const vals=[...new Set(validStudents().map(s=>String(s.values[key]??'').trim()).filter(Boolean))];
  let p=0;
  vals.forEach(val=>{
    const ratios=groups.map(g=>g.length?g.filter(s=>String(s.values[key]??'').trim()===val).length/g.length:0);
    p+=variance(ratios);
  });
  return p;
}

function withinNumericPenalty(groups,key){
  let total=0,n=0;
  groups.forEach(g=>{
    const vals=g.map(s=>numeric(s.values[key])).filter(Number.isFinite);
    if(vals.length>1){
      total+=variance(vals)*vals.length;
      n+=vals.length;
    }
  });
  return n?total/n:0;
}
function withinCategoryPenalty(groups,key){
  let total=0,n=0;
  groups.forEach(g=>{
    if(!g.length)return;
    const counts={};
    g.forEach(s=>{
      const v=String(s.values[key]??'').trim();
      if(v)counts[v]=(counts[v]||0)+1;
    });
    const counted=Object.values(counts).reduce((a,b)=>a+b,0);
    if(!counted)return;
    let sumSq=0;
    Object.values(counts).forEach(c=>{
      const p=c/counted;
      sumSq+=p*p;
    });
    total+=(1-sumSq)*counted;
    n+=counted;
  });
  return n?total/n:0;
}
function evaluate(assign){
  const groups=[];for(let c=0;c<classCount();c++)groups.push(members(c,assign));
  let score=0,hard=0;
  const sizes=groups.map(g=>g.length),max=Math.max(...sizes,0),min=Math.min(...sizes,0),allowed=+$('sizeDiff').value;
  if(max-min>allowed)score+=(max-min-allowed)*5000;
  schema.forEach(col=>{
    if(col.type==='id'||col.type==='ignore'||!col.weight)return;
    const w=Number(col.weight)||0;
    if(w>0){
      if(col.type==='numeric'){
        score+=variance(groups.map(g=>mean(g,col.key)))*uiSettings.numericBalanceScale*w;
      }else if(['category','ordinal','boolean'].includes(col.type)){
        score+=distributionPenalty(groups,col.key)*uiSettings.categoryBalanceScale*w;
      }
    }else if(w<0){
      const strength=Math.abs(w);
      if(col.type==='numeric'||col.type==='ordinal'){
        score+=withinNumericPenalty(groups,col.key)*uiSettings.numericClusterScale*strength;
      }else if(['category','boolean'].includes(col.type)){
        score+=withinCategoryPenalty(groups,col.key)*uiSettings.categoryClusterScale*strength;
      }
    }
  });
  if(uiSettings.pairRulesEnabled) pairRules.forEach(r=>{
    if(assign[r.a]===undefined||assign[r.b]===undefined)return;
    const same=assign[r.a]===assign[r.b],bad=(r.type==='apart'&&same)||(r.type==='together'&&!same);
    if(bad){score+=r.weight;if(r.weight>=10000)hard++}
  });
  return{score,hard};
}
function initialAssignment(){
  const a={},k=classCount(),free=[];
  validStudents().forEach(s=>{
    if(fixedStudents.has(s.id)&&assignment[s.id]!==undefined)a[s.id]=assignment[s.id];else free.push(s.id);
  });
  for(let i=free.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[free[i],free[j]]=[free[j],free[i]]}
  const counts=Array(k).fill(0);Object.values(a).forEach(c=>counts[c]++);
  free.forEach(id=>{const m=Math.min(...counts),choices=[];for(let c=0;c<k;c++)if(counts[c]===m)choices.push(c);const c=choices[Math.floor(Math.random()*choices.length)];a[id]=c;counts[c]++});
  return a;
}

function validateGroupCount(){
  const nMembers=validStudents().length;
  const k=classCount();

  if(nMembers===0)return true;

  if(k>nMembers){
    toast(`${tr('cannotCreateGroups')} (${nMembers} members / ${k} groups)`);
    return false;
  }

  if(k>Math.ceil(nMembers/2)){
    const ok=confirm(`${nMembers} members / ${k} groups. ${tr('manyGroupsConfirm')}`);
    if(!ok)return false;
  }
  return true;
}

async function optimize(){
  if(!validStudents().length)return toast(tr('noMembers'));
  if(!validateGroupCount())return;
  sortPreview=null;
  pushHistory();
  setComputing(true,0);
  $('score').textContent=tr('optimizing');
  await yieldToUI();
  try{
    let cur=initialAssignment(),curEv=evaluate(cur),best={...cur},bestEv=curEv;
    const ids=validStudents().map(s=>s.id).filter(id=>!fixedStudents.has(id));
    const loops=Math.min(50000,Math.max(12000,ids.length*1000));
    const chunk=500;
    for(let t=0;t<loops&&ids.length;t++){
      const cand={...cur};
      if(Math.random()<.8&&ids.length>1){
        const a=ids[Math.floor(Math.random()*ids.length)],b=ids[Math.floor(Math.random()*ids.length)];if(a===b)continue;
        [cand[a],cand[b]]=[cand[b],cand[a]];
      }else{
        const a=ids[Math.floor(Math.random()*ids.length)];cand[a]=Math.floor(Math.random()*classCount());
      }
      const ev=evaluate(cand),temp=Math.max(.05,1-t/loops)*8;
      if(ev.score<curEv.score||Math.random()<Math.exp((curEv.score-ev.score)/temp)){cur=cand;curEv=ev}
      if(ev.score<bestEv.score){best={...cand};bestEv=ev}
      if(t%chunk===0){
        const progress=(t/loops)*100;
        setComputing(true,progress);
        $('score').textContent=`${tr('searching')} best ${bestEv.score.toFixed(1)}`;
        await yieldToUI();
      }
    }
    assignment=best;lastEval=bestEv;reconcileSlots();renderClasses();
    $('score').textContent=`score ${bestEv.score.toFixed(1)}${bestEv.hard?' / hard '+bestEv.hard:''}`;
    setComputing(true,100);
    await new Promise(r=>setTimeout(r,120));
    toast(bestEv.hard?tr('hardViolation'):tr('built'));
  }finally{
    setComputing(false,0);
  }
}
$('build').onclick=optimize;
if($('addGroup')) $('addGroup').onclick=addGroup;
$('clear').onclick=()=>{assignment={};fixedStudents.clear();classSlots={};$('score').textContent='';renderClasses()};
function pairInfo(id){
  return pairRules.filter(r=>r.a===id||r.b===id).map(r=>{
    const other=r.a===id?r.b:r.a,same=assignment[id]!==undefined&&assignment[id]===assignment[other];
    return{...r,other,satisfied:r.type==='together'?same:!same}
  });
}

function setComputing(on,progress=0){
  $('computeState').hidden=!on;
  $('build').disabled=on;
  $('clear').disabled=on;
  $('progressBar').style.width=Math.max(0,Math.min(100,progress))+'%';
  if(on)$('computeText').textContent=tr('computing')+' '+Math.round(progress)+'%';
}
function yieldToUI(){return new Promise(resolve=>setTimeout(resolve,0));}

function adaptiveLayout(){
  const w=document.querySelector('.main').getBoundingClientRect().width;
  const k=classCount();
  const minPerClass=270;
  const horizontal=w >= Math.min(k,3)*minPerClass + 40;
  $('classrooms').className='classrooms '+(horizontal?'horizontal':'vertical');
  $('classrooms').style.setProperty('--cols',Math.min(k,3));
}

function groupSummaryHTML(c){
  const g=members(c);
  const parts=[`${g.length} members`];
  const col=selectedDisplayColumn();

  if(col){
    if(col.type==='numeric'){
      const vals=g.map(s=>parseFloat(s.values[col.key])).filter(Number.isFinite);
      if(vals.length){
        const avg=vals.reduce((a,b)=>a+b,0)/vals.length;
        parts.push(`${tr('averageWord')} ${avg.toFixed(1)}`);
      }
    }else{
      const counts={};
      g.forEach(s=>{
        const v=String(s.values[col.key]??'').trim();
        if(v)counts[v]=(counts[v]||0)+1;
      });
      const cats=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,4);
      if(cats.length)parts.push(cats.map(([k,v])=>`${k}:${v}`).join(' · '));
    }
  }

  const fixed=g.filter(s=>fixedStudents.has(s.id)).length;
  if(fixed)parts.push(`${fixed} ${tr('fixedWord')}`);

  return parts.join(' · ');
}


let searchQuery='';

function applySearchHighlight(){
  const q=searchQuery.trim().toLowerCase();
  document.querySelectorAll('.desk[data-member-id]').forEach(card=>{
    const id=card.dataset.memberId;
    const s=studentById(id);
    const name=s?studentName(s).toLowerCase():'';
    const match=q && name.includes(q);
    card.classList.toggle('search-match',!!match);
    card.classList.toggle('search-dim',!!q && !match);
  });
}

function renderClasses(){
  applyDeskLayout(); ensureSlots(); reconcileSlots(); adaptiveLayout(); $('classrooms').innerHTML='';
  for(let c=0;c<classCount();c++){
    const g=members(c),room=document.createElement('section');room.className='classroom';
    room.innerHTML=`<div class="class-head">
      <div class="group-title-wrap">
        <input class="group-title-input" value="${esc(groupName(c))}" aria-label="${tr('renameGroup')}" title="${tr('renameGroup')}">
        <button class="group-remove-btn" type="button" title="${tr('deleteGroup')}" aria-label="${tr('deleteGroup')}" ${classCount()<=1?'disabled':''}>×</button>
      </div>
      <div class="class-meta">${g.length} ${tr("membersWord")} / ${classSlots[c].length} ${tr("slotsWord")}</div>
    </div>
    <div class="desks"></div>
    <button class="add-slot">${tr('addSlot')}</button>
    <div class="summary"></div>`;

    const titleInput=room.querySelector('.group-title-input');
    titleInput.oninput=()=>{
      const gcfg=groupsConfig[c];
      if(gcfg)gcfg.name=titleInput.value;
    };
    titleInput.onblur=()=>{
      if(!titleInput.value.trim()){
        const fallback=`Group ${c+1}`;
        titleInput.value=fallback;
        if(groupsConfig[c])groupsConfig[c].name=fallback;
      }
    };
    titleInput.onkeydown=e=>{
      if(e.key==='Enter'){
        e.preventDefault();
        titleInput.blur();
      }
    };

    room.querySelector('.group-remove-btn').onclick=()=>removeGroup(c);
    room.querySelector('.add-slot').onclick=()=>{classSlots[c].push('');renderClasses()};
    room.querySelector('.summary').textContent=groupSummaryHTML(c);
    const desks=room.querySelector('.desks');
    previewSlotsForGroup(c).forEach((sid,i)=>{
      const s=sid?studentById(sid):null,d=document.createElement('div'); d.className='desk'+(!s?' empty':'');
      if(!s){ d.innerHTML='<span class="empty-dot">·</span>'; }
      else{
        const fixed=fixedStudents.has(s.id); if(fixed)d.classList.add('fixed');
        const infos=uiSettings.pairRulesEnabled?pairInfo(s.id):[],bad=infos.some(x=>!x.satisfied); if(bad)d.classList.add('rule-warning');
        const col=selectedDisplayColumn();
        const value=col?s.values[col.key]:'';
        let visual='<div class="visual-footer"></div>';
        if(col && value!=='' && value!=null){
          if(col.type==='numeric'){
            const nc=numericColor(value,col);
            if((uiSettings.numericDisplay||'bar')==='color'){
              visual=`<div class="visual-footer numeric-color-mode" style="background:${nc.color}">
                <span class="numeric-color-value">${esc(value)}</span>
              </div>`;
            }else{
              visual=`<div class="visual-footer">
                <div class="numeric-row">
                  <div class="numeric-value">${esc(value)}</div>
                  <div class="numeric-track"><div class="numeric-fill" style="width:${Math.max(3,nc.t*100)}%;background:#8d97a4"></div></div>
                </div>
              </div>`;
            }
          }else{
            const c=categoryColor(String(value));
            visual=`<div class="visual-footer">
              <span class="category-pill" style="background:${c}">
                <span class="category-dot"></span>${esc(value)}
              </span>
            </div>`;
          }
        }
        d.dataset.memberId=s.id;
        d.innerHTML=`<button class="lock" title="${fixed?tr('unlock'):tr('lock')}" aria-label="${fixed?tr('unlock'):tr('lock')}"></button>
          <div class="student-name">${esc(studentName(s))}</div>
          ${visual}`;
        d.querySelector('.lock').onclick=e=>{e.stopPropagation();toggleFixed(s.id)}; d.draggable=true; d.ondragstart=e=>e.dataTransfer.setData('text/plain',s.id);
      }
      d.ondragover=e=>{e.preventDefault();d.classList.add('dragover')}; d.ondragleave=()=>d.classList.remove('dragover');
      d.ondrop=e=>{e.preventDefault();d.classList.remove('dragover');const id=e.dataTransfer.getData('text/plain');if(id)moveToSlot(id,c,i)}; desks.appendChild(d);
    });
    const sum=room.querySelector('.summary'); const bits=[`${tr('fixedLabel')} ${g.filter(s=>fixedStudents.has(s.id)).length}`];
    schema.filter(x=>x.type==='numeric'&&x.weight>0).slice(0,3).forEach(col=>bits.push(`${esc(col.label)} avg ${mean(g,col.key).toFixed(2)}`));
    schema.filter(x=>['category','ordinal','boolean'].includes(x.type)&&x.weight>0).slice(0,2).forEach(col=>bits.push(`${esc(col.label)}: ${[...new Set(g.map(s=>s.values[col.key]).filter(Boolean))].join('/')}`));
    sum.innerHTML=bits.map(x=>`<div>${x}</div>`).join(''); $('classrooms').appendChild(room);
  }
  updateStatus(); renderDisplayLegend();
}
function updateStatus(){$('status').textContent=`${validStudents().length} members / ${classCount()} groups`}
window.onresize=adaptiveLayout;

const splitter=$('splitter');let resizing=false;
splitter.onpointerdown=e=>{resizing=true;splitter.classList.add('dragging');splitter.setPointerCapture(e.pointerId)};
splitter.onpointermove=e=>{if(!resizing||innerWidth<=820)return;const w=Math.max(300,Math.min(760,e.clientX));document.documentElement.style.setProperty('--side',w+'px');adaptiveLayout()};
splitter.onpointerup=e=>{resizing=false;splitter.classList.remove('dragging');try{splitter.releasePointerCapture(e.pointerId)}catch(_){}};


function csvEscape(v){
  const s=String(v??'');
  return /[",\n]/.test(s)?`"${s.replaceAll('"','""')}"`:s;
}
function exportAssignmentsCsv(){
  const rows=[['Member','Group','Position',...schema.filter(c=>c.type!=='id').map(c=>c.label)]];
  ensureSlots();

  for(let c=0;c<classCount();c++){
    classSlots[c].forEach((id,i)=>{
      if(!id)return;
      const s=studentById(id);
      if(!s)return;
      rows.push([
        studentName(s),
        groupName(c),
        i+1,
        ...schema.filter(col=>col.type!=='id').map(col=>s.values[col.key]??'')
      ]);
    });
  }

  const csv='\uFEFF'+rows.map(r=>r.map(csvEscape).join(',')).join('\n');
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download='group-builder-export.csv';
  a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  toast('CSV exported');
}


function printGroupView(){
  document.body.classList.add('print-mode');
  window.print();
  setTimeout(()=>document.body.classList.remove('print-mode'),100);
}

function snapshot(){
  return {
    app:"Group Builder",
    version:23.2,
    savedAt:new Date().toISOString(),
    schema,
    students,
    pairRules,
    assignment,
    fixedStudents:[...fixedStudents],
    classSlots,
    classCount:classCount(),
    sizeDiff:$('sizeDiff')?.value ?? "1",
    displayFieldKey,
    uiSettings:{...uiSettings},
    groupsConfig:JSON.parse(JSON.stringify(groupsConfig))
  };
}
function restore(d){
  if(!d || !Array.isArray(d.schema) || !Array.isArray(d.students)) throw new Error('Invalid project');
  schema=d.schema;
  students=d.students;
  pairRules=d.pairRules||[];
  assignment=d.assignment||{};
  fixedStudents=new Set(d.fixedStudents||[]);
  classSlots=d.classSlots||{};
  displayFieldKey=d.displayFieldKey||schema.find(x=>x.type!=='id')?.key||'';
  if(d.classCount)$('classCount').value=d.classCount;
  if(d.sizeDiff!=null && $('sizeDiff')) $('sizeDiff').value=String(d.sizeDiff);
  if(Array.isArray(d.groupsConfig)){
    groupsConfig=d.groupsConfig.map(g=>({id:g.id||makeGroupId(),name:g.name||'Group'}));
  }else if(Array.isArray(d.groupNames)){
    // backward compatibility
    groupsConfig=d.groupNames.map(n=>({id:makeGroupId(),name:n}));
  }
  if(d.uiSettings){
    Object.assign(uiSettings,d.uiSettings);
    applyUiSettings();
  }
  renderAll();
}
function saveProjectAs(){
  const data=JSON.stringify(snapshot(),null,2);
  const blob=new Blob([data],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  const stamp=new Date().toISOString().slice(0,10).replaceAll('-','');
  a.download=`group-builder-${stamp}.classbuilder.json`;
  a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  toast('Project saved');
}
$('saveAs').onclick=saveProjectAs;
$('openProject').onclick=()=>$('projectFile').click();
$('projectFile').onchange=async e=>{
  const file=e.target.files?.[0];
  if(!file)return;
  try{
    const text=await file.text();
    const data=JSON.parse(text);
    restore(data);
    toast('Project opened');
  }catch(err){
    console.error(err);
    toast(tr('projectOpenFailed'));
  }finally{
    e.target.value='';
  }
};


if($('settingsBtn')) $('settingsBtn').onclick=()=>setSettingsOpen(true);
if($('settingsClose')) $('settingsClose').onclick=()=>setSettingsOpen(false);

if($('themeSelect')) $('themeSelect').onchange=e=>{
  uiSettings.theme=e.target.value;
  applyUiSettings();
};


if($('pairRulesEnabled')) $('pairRulesEnabled').onchange=e=>{
  uiSettings.pairRulesEnabled=e.target.checked;
  applyUiSettings();
  if(!uiSettings.pairRulesEnabled){
    // Keep existing rules saved, but ignore them while disabled.
    renderClasses();
  }
};

if($('numericDisplay')) $('numericDisplay').onchange=e=>{
  uiSettings.numericDisplay=e.target.value;
  applyUiSettings();
  renderClasses();
};

if($('deskColumns')) $('deskColumns').onchange=e=>{
  uiSettings.deskColumns=+e.target.value;
  applyUiSettings();
  renderClasses();
};
if($('cardScale')) $('cardScale').oninput=e=>{
  uiSettings.cardScale=+e.target.value;
  applyUiSettings();
  renderClasses();
};
if($('deskGap')) $('deskGap').oninput=e=>{
  uiSettings.deskGap=+e.target.value;
  applyUiSettings();
  renderClasses();
};

document.addEventListener('keydown',e=>{
  if(e.key==='Escape') setSettingsOpen(false);
});
loadUiSettings();


$('sortAsc').onclick=()=>sortByDisplayedField(1);
$('sortDesc').onclick=()=>sortByDisplayedField(-1);
$('applySortPreview').onclick=applySortPreview;
$('clearSortPreview').onclick=clearSortPreview;
$('undoBtn').onclick=undoLast;
updateUndoButton();


if($('addFieldBtn')) $('addFieldBtn').onclick=()=>setFieldModalOpen(true);
if($('fieldModalClose')) $('fieldModalClose').onclick=()=>setFieldModalOpen(false);
if($('fieldModalCancel')) $('fieldModalCancel').onclick=()=>setFieldModalOpen(false);
if($('fieldModalAdd')) $('fieldModalAdd').onclick=addCustomField;
if($('newFieldType')) $('newFieldType').onchange=updateFieldTypeHelp;
if($('newFieldName')) $('newFieldName').addEventListener('keydown',e=>{
  if(e.key==='Enter')addCustomField();
});
if($('fieldModal')) $('fieldModal').addEventListener('click',e=>{
  if(e.target===$('fieldModal'))setFieldModalOpen(false);
});


if($('viewModeBtn'))$('viewModeBtn').onclick=()=>setMemberTableMode('view');
if($('editModeBtn'))$('editModeBtn').onclick=()=>setMemberTableMode('edit');


$('memberSearch').addEventListener('input',e=>{
  searchQuery=e.target.value;
  applySearchHighlight();
});
$('clearSearch').onclick=()=>{
  searchQuery='';
  $('memberSearch').value='';
  applySearchHighlight();
};
if($('exportCsv')) $('exportCsv').onclick=exportAssignmentsCsv;
if($('printView')) $('printView').onclick=printGroupView;




function bindOptimizationScale(rangeId,numId,key,min,max){
  const range=$(rangeId), num=$(numId);
  if(!range||!num)return;
  const setValue=v=>{
    let x=Number(v);
    if(!Number.isFinite(x))x=uiSettings[key];
    x=Math.max(min,Math.min(max,x));
    uiSettings[key]=x;
    range.value=x;
    num.value=x;
    applyUiSettings();
  };
  range.oninput=()=>setValue(range.value);
  num.onchange=()=>setValue(num.value);
}
bindOptimizationScale('numericBalanceScale','numericBalanceScaleNumber','numericBalanceScale',1,100);
bindOptimizationScale('categoryBalanceScale','categoryBalanceScaleNumber','categoryBalanceScale',50,1000);
bindOptimizationScale('numericClusterScale','numericClusterScaleNumber','numericClusterScale',1,100);
bindOptimizationScale('categoryClusterScale','categoryClusterScaleNumber','categoryClusterScale',50,1000);

if($('resetOptimizationScales')) $('resetOptimizationScales').onclick=()=>{
  uiSettings.numericBalanceScale=30;
  uiSettings.categoryBalanceScale=500;
  uiSettings.numericClusterScale=30;
  uiSettings.categoryClusterScale=500;
  applyUiSettings();
  toast(tr('optimizationReset'));
};


function clampOptValue(v,min,max,fallback){
  let x=Number(v);
  if(!Number.isFinite(x)) x=fallback;
  return Math.max(min,Math.min(max,x));
}

function wireAdvancedOptimizationControls(){


  const defs=[
    ['numericBalanceScale','numericBalanceScaleNumber','numericBalanceScale',1,100],
    ['categoryBalanceScale','categoryBalanceScaleNumber','categoryBalanceScale',50,1000],
    ['numericClusterScale','numericClusterScaleNumber','numericClusterScale',1,100],
    ['categoryClusterScale','categoryClusterScaleNumber','categoryClusterScale',50,1000]
  ];

  defs.forEach(([rangeId,numId,key,min,max])=>{
    const range=$(rangeId), num=$(numId);
    if(!range || !num) return;

    const commit=(raw)=>{
      const v=clampOptValue(raw,min,max,uiSettings[key]);
      uiSettings[key]=v;
      range.value=v;
      num.value=v;
      localStorage.setItem('group-builder-ui-settings',JSON.stringify(uiSettings));
    };

    range.oninput=()=>commit(range.value);
    num.oninput=()=>commit(num.value);
    num.onchange=()=>commit(num.value);
  });

  const reset=$('resetOptimizationScales');
  if(reset){
    reset.onclick=()=>{
      uiSettings.numericBalanceScale=30;
      uiSettings.categoryBalanceScale=500;
      uiSettings.numericClusterScale=30;
      uiSettings.categoryClusterScale=500;
      syncAdvancedOptimizationControls();
      localStorage.setItem('group-builder-ui-settings',JSON.stringify(uiSettings));
      toast(tr('optimizationReset'));
    };
  }
}

wireAdvancedOptimizationControls();

if($('languageSelect')){
  $('languageSelect').onchange=e=>{
    uiSettings.language=e.target.value==='ja'?'ja':'en';
    localStorage.setItem('group-builder-ui-settings',JSON.stringify(uiSettings));
    renderAll();
    applyUiSettings();
    applyLanguage();
  };
}




if($('clearLocalData')){
  $('clearLocalData').onclick=()=>{
    if(!confirm(tr('clearLocalConfirm'))) return;
    localStorage.removeItem('group-builder-ui-settings');

    // Reset only browser-local UI settings. Current roster/project stays open.
    uiSettings.theme='dark';
    uiSettings.language='en';
    uiSettings.deskColumns=4;
    uiSettings.cardScale=100;
    uiSettings.deskGap=8;
    uiSettings.numericDisplay='color';
    uiSettings.numericBalanceScale=30;
    uiSettings.categoryBalanceScale=500;
    uiSettings.numericClusterScale=30;
    uiSettings.categoryClusterScale=500;
    uiSettings.pairRulesEnabled=false;

    applyUiSettings();
    renderAll();
    applyLanguage();
    toast(tr('localDataCleared'));
  };
}

loadUiSettings();
applyUiSettings();
renderAll();
applyLanguage();
