# placeholder.jquery.js


## placeholder.jquery.js是什么？

这是一个为了在IE上兼容显示Placeholder的插件，目前兼容ie6-8，在其他浏览器上判断如果浏览器支持placeholder属性，则使用默认的placeholder。

有的Placeholder插件是在当前元素上设置value，这样和jquery.validate之类的验证插件一起使用时候可能会有冲突，而这个插件是在当前元素上生成一个元素占位，这样不会影响input本身的值。



## 使用办法？

```html
<script src="/jquery/dist/jquery.min.js"></script>
<script src="/iefixs/placeholders.jquery.js"></script>
```