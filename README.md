# react-native-redux

### 一.创建项目

`react-native init CountersDemo --version 0.57.1`

### 二.安装redux相关文件

`npm install --save redux`

`npm install --save react-redux`

`npm install --save react-navigation`

`npm install --save redux-thunk`

### 三.相关代码实现
  1.创建src文件夹存放所有文件  
  2.新建文件夹,其中包含action、components、constants、container、pages、reducers、store  
  3.设定类型type:constans文件夹新建loginType,用来划分登陆过程中的事件类别   
  4.设定预处理消息过程:actions文件夹新建loginAction,用来给预处理消息区分各个事件的类别
