# 設定仕様

## General

General では、頻繁には変更しない設定をまとめています。

### Number of groups

作成するグループ数です。

人数より多いグループ数は作成できません。

### Allowed size difference

グループ間で許容する人数差です。

### Group names

グループ名は自由に変更できます。

例:

- Team A
- Team B
- 1組
- 営業A

右側の `×` で任意のグループを削除できます。

内部ではグループIDを保持しますが、画面にはユーザーが設定した名前だけを表示します。

### Card size

カード全体のサイズを変更します。

文字だけでなく、カード高さ、余白、表示バー、ラベルなども一緒に拡大縮小します。

### Numeric display

数値属性の表示方法です。

- Bar
- Color

### Pair rules

初期状態ではOFFです。

ONにすると、特定メンバーを同じグループにする / 離すルールを設定できます。

## Balance

各属性ごとに `-20〜+20` を設定できます。

- `-20`: Cluster
- `0`: Neutral
- `+20`: Balance

詳細は [Balance の考え方](BALANCE.md) を参照してください。

## Advanced Optimization

General の `Advanced Optimization` をONにすると、通常は内部で固定されている最適化係数を調整できます。

- Numeric · Balance: 既定値 30
- Category · Balance: 既定値 500
- Numeric / Ordinal · Cluster: 既定値 30
- Category / Boolean · Cluster: 既定値 500

通常利用では変更不要です。

Balanceスライダーの `-20〜+20` が「ユーザーが指定する属性ごとの重要度」で、
Advanced Optimization の係数は「属性型ごとの基礎倍率」です。

つまり最終的な効き方は概念的には、

`属性スライダー値 × 型ごとの基礎倍率`

で決まります。
