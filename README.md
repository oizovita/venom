# Welcome to venom 👋
[![Version](https://img.shields.io/npm/v/venom.svg)](https://www.npmjs.com/package/venom)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/oizovita/venom)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/kefranabg/readme-md-generator/blob/master/LICENSE)

> This package consumes an object and controls its methods

### 🏠 [Homepage](https://github.com/oizovita/venom)

## Usage

```sh
const venom = require('./main');

const user = {
  name: 'Eddie Brock',

  getName() {
    return this.name;
  },
};

user.getName(); // Eddie Brock

venom(user);

user.getName(); // We are Venom
```

## Author

👤 **Oles Izovita**

* Github: [@oizovita](https://github.com/oizovita)
* LinkedIn: [@oizovita](https://linkedin.com/in/oles-izovita-a56807172/)

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2021 [Oles Izovita](https://github.com/oizovita).

This project is [MIT](https://github.com/oizovita/venom/blob/master/LICENSE) licensed.
