# Balance の考え方

Balance は、各属性をグループ分けにどの方向で効かせるかを指定します。

## -20: Cluster

似た人を同じグループにまとめます。

例:

- 年齢: 近い年齢同士
- 経験年数: 経験が近い人同士
- 性別: 同じカテゴリがまとまりやすい
- 学問分野: 同分野がまとまりやすい

## 0: Neutral

その属性をグループ分けでは無視します。

表示には使えます。

## +20: Balance

各グループに均等にばらけさせます。

例:

- 年齢: 平均年齢を近づける
- 経験年数: ベテランと初心者を分散
- 性別: 比率を近づける
- 学問分野: 各分野を分散

## 属性型ごとの扱い

### numeric

- 正: グループ平均を近づける
- 負: グループ内で近い値をまとめる

### category / boolean

- 正: カテゴリ比率を揃える
- 負: 同カテゴリをまとめる

### ordinal

順序を持つ属性です。

正では分布を揃え、負では近い段階の人をまとめます。

## Advanced Optimizationとの関係

GeneralでAdvanced OptimizationをONにすると、型ごとの基礎倍率を変更できます。

既定値:

- Numeric Balance: 30
- Category Balance: 500
- Numeric / Ordinal Cluster: 30
- Category / Boolean Cluster: 500

この倍率は、numeric と category で元のペナルティ尺度が異なるために使っています。
