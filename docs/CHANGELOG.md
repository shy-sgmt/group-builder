# Version History

## v23.5

- Changed slot controls to an equal 50/50 layout
- `+ Add Slot` is on the left
- `− Remove Slot` is on the right
- Both buttons now use the same width and height



## v23.4

- Fixed `Remove Slot` placement
- `+ Add Slot` and `− Remove Slot` now stay directly side by side



## v23.3

- Added `− Remove Slot` next to `+ Add Slot`
- Remove Slot deletes the last available empty slot in that group
- Occupied slots are never removed automatically
- If no empty slot exists, the app shows a warning



## v23.2

- Fixed malformed HTML left behind after moving Group Settings out of General
- Removed stale Group Names helper text
- Prevented the right-side workspace from dropping below the sidebar
- Made the right toolbar wrap safely on narrow windows



## v23.1

- Moved group management from General Settings to the right-side group view
- Group names can now be edited directly in each group header
- Added a delete button to each group header
- Added `+ Add Group` to the right-side toolbar
- Removed group count and group-name editors from General Settings
- Kept Allowed size difference in General Settings as a global optimization option



## v23.0

- Auto Balance sliders remain unchanged
- Balance values can also be entered directly as numbers
- Direct input accepts only values from `-20` to `+20`
- Out-of-range input shows a warning and restores the previous valid value



## v22.9

- Added column deletion in Members → Edit mode
- ID/name column cannot be deleted
- Delete controls are intentionally small and only visible while editing
- Deleting the currently displayed attribute clears that display selection



## v22.8

- Moved version information out of the root README and into `docs/CHANGELOG.md`
- Added a prominent GitHub Pages launch link to the README
- Added GitHub Pages setup instructions



## v22.7

- Changed the default Numeric Display from Bar to Color



## v22.6

- Renamed Save to Save & Load
- Moved Clear Local Data into General Settings



## v22.3

- Fixed language switching by resolving a runtime error before the language event handler
- Restored Export CSV and Print View buttons
- Added defensive event binding for optional controls
- Added Clear Local Data in General Settings
- Added a direct `setLanguage()` fallback on the language selector



## v22.2

- Reworked language switching to update the DOM directly and deterministically
- Removed recursive language/render interactions
- Rebuilt all English templates with natural US/European terminology
- Replaced school subject `Japanese` with `English Language Arts`
- Updated company, sales, academia, public administration, baseball, and project examples for Western conventions



## v22.1

- Fixed English / Japanese language switching
- Moved `app.js` loading to the end of the document
- Applied translations after dynamic UI rendering
- Removed obsolete Advanced Optimization toggle logic



## v22

- Completed full English/Japanese UI switching
- Japanese mode now translates all major titles, buttons, General settings, modal labels, pair-rule labels, and dynamic status text
- Added bilingual template folders: `templates/en/` and `templates/ja/`
- English remains the default UI language
- Japanese labels use natural Japanese and katakana where appropriate



## v21.1

- Removed the Advanced Optimization enable checkbox
- Advanced Optimization parameters are always editable in General
- English mode no longer shows Japanese template/sample UI text
- Expanded English/Japanese translation coverage


## v21

- English is now the default UI language
- Added General → Language with English / Japanese switching
- Advanced Optimization is shown directly in General
- Group Settings contains group count, allowed size difference, and group names
- Removed detailed Balance explanation from General
- Rewrote root README in English
- Added `docs/README_JA.md` and linked English/Japanese README files


## v20.4

- Advanced Optimizationの入力配線を修正
- Numeric / Category / Cluster / Balance係数が確実に変更可能に
- General設定の見出し文字サイズと太さを統一


## v20.3

- GeneralにAdvanced Optimizationを追加
- Numeric / CategoryのBalance係数を個別設定可能
- Numeric / Ordinal / Category / BooleanのCluster係数を個別設定可能
- 既定値へ戻すReset defaultsを追加


## v20.1

- Balance を `-20〜+20` に変更
- 負の値で Cluster、正の値で Balance
- メイン画面では数値のみ表示
- Cluster / Neutral / Balance の説明は General に集約
- GitHub公開向けにルート構成を整理
- Excelテンプレートを `templates/` に集約

## v19.x

- Group summary
- Member search
- Export CSV
- Print View
- Group name編集
- Group削除
- 内部Group ID導入
- 二重Group名表示を削除
- Card sizeをカード全体へ適用

## v18.x

- General設定の整理
- Pair rulesを任意表示へ変更
- Templateボタン追加
- アカデミア異分野交流テンプレート
- 野球テンプレート
- 任意グループ数対応
- View / Edit モード
