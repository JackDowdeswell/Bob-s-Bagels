Part 1:
| Object | Properties | Message | Output |
| ----------- | ----------- | ----------- | ----------- |
| Member of public | name@string | nameOfMember() | @string |
| Bagel | item@string | nameOfMember() | @string |
| Basket | array[@item] | addToBasket() | array[@item] |


| Object | Properties | Message | Output |
| ----------- | ----------- | ----------- | ----------- |
| Member of public | name@string | nameOfMember() | @string |
| Bagel | item@string | nameOfMember() | @string |
| Basket | array[@item] | removeFromBasket() | array[@item] |


Part 2:

| Object | Properties | Message | Output |
| ----------- | ----------- | ----------- | ----------- |
| Member of public | name@string | nameOfMember() | @string |
| Bagel | item@string | bagel() | @string |
| Basket | basket @array[@item] | addToBasket() | array[@item] |
| IsBasketFull | numberOfItems@int | isBasketFull(@item) | @boolean |


| Object | Properties | Message | Output |
| ----------- | ----------- | ----------- | ----------- |
| Manager | name@string | nameOfManager() | @string |
| Sales | sales@int | salesTotal() | @int |
| Basket | basket @array[@item] | createLargerBasket() | array[@item] |


| Object | Properties | Message | Output |
| ----------- | ----------- | ----------- | ----------- |
| Member of public | name@string | nameOfMember() | @string |
| Item | item@string | item() | @string |
| Basket | basket @array[@item] | addToBasket() | array[@item] |
| DoesItemExistInBasket | basket @array[@item] | itemExist(@item)| @boolean |
|| | checkItemId(@item)| |
| Sanity | sanity@int | determineSanity() | @int |


Part 3:

| Object | Properties | Message | Output |
| ----------- | ----------- | ----------- | ----------- |
| Member of public | name@string | nameOfMember() | @string |
| Bagel | item@string | nameOfMember() | @string |
| Basket | array[@item] | addToBasket() | array[@item] |
| Price | price@int |  itemPrice(bagel) | @int


| Object | Properties | Message | Output |
| ----------- | ----------- | ----------- | ----------- |
| Member of public | name@string | nameOfMember() | @string |
| Bagel | item@string | nameOfMember() | @string |
| Basket | array[@item] | itemTotal() | array[@item] |
| Checkout | basket[@item] | displayItemTotal() | @int |