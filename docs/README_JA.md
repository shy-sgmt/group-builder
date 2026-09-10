# Group Builder

Group Builder は、メンバーの属性をもとに、均等化または意図的なクラスタリングを行いながらグループ分けできるブラウザアプリです。

学校、会社、異分野交流会、行政、スポーツ、一般的なプロジェクトチームなどを想定しています。

[English README](../README.md)

## 主な機能

- CSV / Excel からメンバーを読み込み
- 属性ごとの型指定
- 任意のグループ数
- 自由なグループ名
- グループ削除
- ドラッグによる手動移動
- メンバー固定
- メンバー検索
- Group summary
- Pair rules
- Undo
- Save As / Open Project
- CSV出力
- Print View
- テーマ変更
- カードサイズ・間隔・列数変更
- 英語 / 日本語UI切替
- Advanced Optimization

## Balance slider

各属性には `-20〜+20` のスライダーがあります。

| 値 | 意味 |
|---|---|
| `-20` | 似た人を同じグループにまとめる |
| `0` | その属性を無視する |
| `+20` | 各グループにできるだけ均等にばらけさせる |

例えば年齢を `-20` にすると近い年代同士がまとまりやすく、`+20` にすると各グループの平均年齢が近づく方向に最適化されます。

## Group Settings

**General** から次を設定できます。

- グループ数
- 許容する人数差
- グループ名

内部では安定したGroup IDを保持しますが、画面にはユーザーが設定した名前だけを表示します。

## Advanced Optimization

Advanced Optimization は **Generalに最初から表示され、チェックなしでそのまま編集できます**。

内部の基礎倍率を細かく変更できます。

- Numeric · Balance — 既定値 `30`
- Category · Balance — 既定値 `500`
- Numeric / Ordinal · Cluster — 既定値 `30`
- Category / Boolean · Cluster — 既定値 `500`

通常は既定値のままで問題ありません。

## Language

**General → Language** から、

- English
- 日本語

を切り替えられます。

デフォルトは英語です。

## ドキュメント

- [詳しい使い方](USAGE.md)
- [設定仕様](SETTINGS.md)
- [Balanceの考え方](BALANCE.md)
- [テンプレート](TEMPLATES.md)
- [プロジェクト保存形式](PROJECT_FORMAT.md)
- [変更履歴](CHANGELOG.md)

## 起動方法

`index.html` をモダンブラウザで開くだけです。


## テンプレート

Excelテンプレートは言語別に分かれています。

- [`templates/en/`](../templates/en/) — 英語版
- [`templates/ja/`](../templates/ja/) — 日本語版

アプリ内の「テンプレート」ボタンも、選択中の言語に合わせた簡易データを読み込みます。
