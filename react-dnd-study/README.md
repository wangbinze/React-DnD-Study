# React DnD Study


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


####  目录结构
demo3
  | -- components         # 组件
    | --  Box.jsx         # DragSource，被拖动的源文件,使其可以进行拖动
    | --  Dustbin.jsx     # 
  | --  types
    | --  index.js        # 存放 type 字符串常量
                          # JavaScript对象，必填，用来声明要拖动的数据。放置目标的有关拖动源的唯一信息。
| --  demo3.jsx           # 入口文件




##  demo3
  | -- components         # 组件
    | --  Box.jsx         # useDrag，被拖动的源文件,使其可以进行拖动
    | --  Dustbin.jsx     # 
  | --  types
    | --  index.js        # 存放 type 字符串常量
                          # JavaScript对象，必填，用来声明要拖动的数据。放置目标的有关拖动源的唯一信息。
| --  demo4.jsx           # 入口文件


##  demo5
  | -- components         # 组件
    | --  Box.jsx         		# useDrag，被拖动的源文件,使其可以进行拖动
    | --  PlaceBucket.jsx     	# useDrog，目标接收组件
	| --  Card.jsx		  		# 根据放入 Box 生成的 Card 组件
  | --  types
    | --  ItemTypes.js        	# 存放 type 字符串常量，在Box.jsx 和 PlaceBucket.jsx 组件中都需要，且两个要对应相同才能形成一个拖拽的配合
                          		# JavaScript对象，必填，用来声明要拖动的数据。放置目标的有关拖动源的唯一信息。
  | --  demo4.jsx           	# 入口文件，在此处对需要拖拽的文件进行一个包裹，DndProvider，允许进行拖拽




模拟poc1.0
自定义布局
初始化