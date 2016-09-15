## 关于  

---

相信你对下面的页面并不陌生：    

![zhihu404](http://7xi5vu.com1.z0.glb.clouddn.com/zhihu404.png)

![jianshu404](http://7xi5vu.com1.z0.glb.clouddn.com/jianshu404.png)

![medium404](http://7xi5vu.com1.z0.glb.clouddn.com/medium404.png)

![kind404](http://7xi5vu.com1.z0.glb.clouddn.com/kinds404.png)



实际上，我们对网络上的信息是没有安全感的，某个帖子，某篇文章，可能稍稍触及某个敏感问题就被管理员删了。当然也有可能被作者自己删了。然后某天你回想起来了，再去找这个页面，你发现你找不到了，焦灼又无奈，怎么永久保存网络上的优质内容呢？有这样一个方案，用印象笔记的功能可以解决，看到某个网页，想要保存下去，截取就行了  

![save_to_evernote](http://7xi5vu.com1.z0.glb.clouddn.com/save_page_to_evernote.png)

也可以用 Win10 的 Edge 浏览器的功能，直接在网页上做笔记，这个功能其实跟印象笔记剪藏是类似的。

但这种方式还是有缺陷的，比如，我想要得到 zhihu 或 quora 某个问题下获得赞同数超过10的答案，难道要我手动一个一个选择吗？我想要得到新浪博客某个博主的所有文章，几百篇文章，难道要我一个链接一个链接地打开截取吗？


怎么解决这个问题，怎么获得最好的阅读体验，最好的阅读体验又是什么？  

我觉得最好的阅读体验仍然是书。相比于电子书，纸质书真的太重，太不环保了。如果能将这些优质内容用电子书的形式保存下来，可以随时随地远离网络的干扰，可以让我们进行离线，深度的阅读，是不是就很好呢?

怎么做？其实我们把这些优质内容做成 EPub 格式的文件，让我们可以随时的离线阅读，像这样：

在 kindle 上阅读：  

![read_with_kindle](http://7xi5vu.com1.z0.glb.clouddn.com/read_with_kindle.jpg)

在手机上阅读：  

![read_with_duokan](http://7xi5vu.com1.z0.glb.clouddn.com/read_with_duokan.png)

在电脑上阅读：

![read_with_ibooks](http://7xi5vu.com1.z0.glb.clouddn.com/read_with_ibooks.png)

怎么做到的？其实只需将爬虫技术和电子书制作软件结合起来，做一个软件，也可以说是一个框架，将对一个网站的支持作为一个插件集成到软件中，如果某个网站有很强烈的需求，就可以在代码中添加对相应网站的支持。 这就是 EE-Book 做的事情。

看看目前的进展吧：  

### 客户端

用 PyQt 写了一个客户端（客户端的图形界面比较鸡肋，目前的精力将会转移到 Web 端）：

![main_frame](http://7xi5vu.com1.z0.glb.clouddn.com/main_frame.png)

这个是图形界面的主界面，很简陋，实际上可以加的功能有很多，比如点击某本书在右边展示封面等等。

还写了一个简单的epub阅读器，也还有很多工作可以做（显然这是一个造轮子的过程）
![simple_epub_reader](http://7xi5vu.com1.z0.glb.clouddn.com/simple_epub_reader.png)

当然，你也可以用系统默认的epub阅读器打开，mac 系统下有iBooks，windows 下可以用 Calibre，当然也可以通过 Firefox 的 EPUBReader 来进行阅读，下面是用 iBooks 打开的：

![no_simple_reader](http://7xi5vu.com1.z0.glb.clouddn.com/no_simple_reader.png)

当你需要下载，制作电子书，可以通过下载的界面进行，选择网站类型，把网址复制到文本框中，点击下载就可以了

![download_main_frame](http://7xi5vu.com1.z0.glb.clouddn.com/download_main_frame.png)


大概一两分钟，就可以制作成一本电子书

![downloading_book](http://7xi5vu.com1.z0.glb.clouddn.com/downloading_book.png)


制作完成之后，就可以打开这本电子书进行阅读了

![done_download_book](http://7xi5vu.com1.z0.glb.clouddn.com/done_download_book.png)

![jianshu_ibooks](http://7xi5vu.com1.z0.glb.clouddn.com/%E7%AE%80%E4%B9%A6%E6%96%87%E7%AB%A0%E9%9B%86%E9%94%A6ibooks.png)

总的来说，客户端图形界面是比较简陋的。花了不少精力在 PyQt 上，现在回头想想，其实不是很值得，相比之下，命令行的界面就要简洁很多：

### 命令行接口

你可以通过 help 选项查看帮助信息

![help info](http://7xi5vu.com1.z0.glb.clouddn.com/help%20info.png)

比如你看到一个简书作者，你想要把他的所有文章做成电子书，你只需要复制一下他的主页链接

![正义的花生](http://7xi5vu.com1.z0.glb.clouddn.com/%E6%AD%A3%E4%B9%89%E7%9A%84%E8%8A%B1%E7%94%9F.png)


粘贴到命令行中，敲下回车键（这里的 debug 参数可以输出一些debug信息）

![简介的命令行1](http://7xi5vu.com1.z0.glb.clouddn.com/%E7%AE%80%E6%B4%81%E7%9A%84%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%96%B9%E5%BC%8F1.png)  
  
 
![简介的命令行2](http://7xi5vu.com1.z0.glb.clouddn.com/%E7%AE%80%E6%B4%81%E7%9A%84%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%96%B9%E5%BC%8F2.png)

可以看到生成的电子书了：  

![命令行生成了电子书](http://7xi5vu.com1.z0.glb.clouddn.com/%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%94%9F%E6%88%90%E4%BA%86%E7%94%B5%E5%AD%90%E4%B9%A6.png)

![简书文章集锦 ibooks](http://7xi5vu.com1.z0.glb.clouddn.com/%E7%AE%80%E4%B9%A6%E6%96%87%E7%AB%A0%E9%9B%86%E9%94%A6ibooks.png)


当你想看看ee-book 对某个网站是否支持，可以通过info参数查看
![get csdn blog info](http://7xi5vu.com1.z0.glb.clouddn.com/get%20csdn%20blog%20info.png)

如果你输入的是一个不支持的网站，EE-Book会给出提示信息。

功能部分就介绍到这了，最后谈谈这个项目的总结和展望吧

### 总结与展望

在开发客户端的时候，我在 v2ex.com 上发了一个帖子，进行了一些讨论，直接把这些反馈贴在这了：  

![支持一下](http://7xi5vu.com1.z0.glb.clouddn.com/%E6%94%AF%E6%8C%81%E4%B8%80%E4%B8%AA.png)  

![很有趣啊，顶](http://7xi5vu.com1.z0.glb.clouddn.com/%E5%BE%88%E6%9C%89%E8%B6%A3%E5%95%8A%E9%A1%B6.png)  

![赞一个，能直接生成 mobi](http://7xi5vu.com1.z0.glb.clouddn.com/%E8%B5%9E%E4%B8%80%E4%B8%AA%20%E8%83%BD%E7%9B%B4%E6%8E%A5%E7%94%9F%E6%88%90mobi%E5%B0%B1%E5%A5%BD%E4%BA%86.png)

![支持其实就是大家贡献规则](http://7xi5vu.com1.z0.glb.clouddn.com/%E6%94%AF%E6%8C%81%E5%85%B6%E5%AE%9E%E5%B0%B1%E6%98%AF%E5%A4%A7%E5%AE%B6%E8%B4%A1%E7%8C%AE%E8%A7%84%E5%88%99.png)  

![赞很有意思的工具](http://7xi5vu.com1.z0.glb.clouddn.com/%E8%B5%9E%E5%BE%88%E6%9C%89%E6%84%8F%E6%80%9D%E7%9A%84%E5%B7%A5%E5%85%B7.png)  

![不错](http://7xi5vu.com1.z0.glb.clouddn.com/%E4%B8%8D%E9%94%99.png)  

![赞calibre](http://7xi5vu.com1.z0.glb.clouddn.com/%E8%B5%9E.png)  

![作为 kindle 用户](http://7xi5vu.com1.z0.glb.clouddn.com/%E4%BD%9C%E4%B8%BAkindle%E7%94%A8%E6%88%B7.png)  

![可以考虑爬取搜狗的微信公众号的内容](http://7xi5vu.com1.z0.glb.clouddn.com/%E5%8F%AF%E4%BB%A5%E8%80%83%E8%99%91%E7%88%AC%E5%8F%96%E6%90%9C%E7%8B%97%E7%9A%84%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7%E7%9A%84%E5%86%85%E5%AE%B9.png)  

![加上贴吧源和 discus 源](http://7xi5vu.com1.z0.glb.clouddn.com/%E5%8A%A0%E4%B8%8A%E8%B4%B4%E5%90%A7%E6%BA%90%E5%92%8Cdiscus%E6%BA%90.png)  
  
![希望能抓取博客园和 csdn](http://7xi5vu.com1.z0.glb.clouddn.com/%E5%B8%8C%E6%9C%9B%E8%83%BD%E6%8A%93%E5%8F%96%E5%8D%9A%E5%AE%A2%E5%9B%AD%E5%92%8Ccsdn.png)

![还有希望抓取](http://7xi5vu.com1.z0.glb.clouddn.com/%E8%BF%98%E6%9C%89%E5%B8%8C%E6%9C%9B%E6%8A%93%E5%8F%96.png)

可以看到，正面评价还是很多的，EE-Book 是有趣且有用的。

### 总结一下

EE-Book 提倡深度阅读，是为喜欢阅读的人准备的。虽算不上不可或缺，也还算对这世界有益。

EE-Book 中还有一些问题需要解决，比如版权问题，比如图形界面，还有很多工作可以做，有很多需要改进的地方。这个项目是一个很好的idea，它会继续发展。
因为这是一件很有意义、也很有挑战的事情。期待有更多人加入进来。

最后，要特别感谢 YaoZeYuan 同学的 [ZhihuHelp](https://github.com/YaoZeyuan/ZhihuHelp) 。同时在这也给出承诺，EE-Book，以及 ee-book.org 提供的功能将永久免费。虽说开发者的人力成本可以不计（因为是为了学习编程而造轮子，很有意思），但服务器的运行是需要资金的。如果你认同 ee-book 的理念，从 ee-book 中获得了帮助，可以考虑捐款，支持这个项目：  

![donate](http://7xi5vu.com1.z0.glb.clouddn.com/zhifubao.jpg)

谢谢大家。







