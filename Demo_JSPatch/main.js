require('UIView, UIColor, UILabel, UIImageView,NSObject,UIButton')

//1.多方法调用，用” , ”隔开(覆盖分类的方法和普通方法一样)
defineClass('OneViewController', {
    
    viewWillAppear: function(animated) {
        //调用父类方法super
        self.super().viewWillAppear(animated);
        var str = "view will appear";
        console.log(str);
    },
            
    viewWillDisappear: function(animated) {
        self.super().viewWillDisappear(animated);
            console.log("view will disappear");
    }
});

//2.UI相关
defineClass('TwoViewController',{
    
    creatView: function() {
        
        var view = UIView.alloc().initWithFrame({x:20, y:20, width:100, height:100});
        view.setBackgroundColor(UIColor.greenColor());
        var label = UILabel.alloc().initWithFrame({x:0, y:0, width:100, height:100});
        label.setText("JSPatch");
        label.setTextAlignment(1);
        view.addSubview(label);
        self.view().addSubview(view)
    },
})

//3.多参数用 " _ "连接
defineClass('ThreeViewController',{
    
    tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
            console.log(indexPath.row());
    },

})

//4.双下划线替换OC中的单下划线(分号中不能再有分号)
defineClass('FourViewController',{
    
    __dataSource: function() {
        console.log("JS双下划线:'__',替换OC中单下划线:'_'");
    },
})

//5.方法前加ORIG调用未覆盖的原方法
defineClass('FiveViewController',{
    beforeMethod: function() {
        console.log("JS:覆盖之后的方法");
    },
            
    viewWillDisappear: function(animated) {
        self.superview().viewWillDisappear(animated);
        self.ORIGbeforeMethod();
    }
})

//6.覆盖类方法,实例方法在第二个参数，类方法放在第三个参数
defineClass('SixViewController',{
    methodA: function(){
    //实例方法
        console.log('调用实例方法')
    }
},{
    //类方法
    classMethodB: function(){
        console.log('调用类方法')
    }
})

//7.用调用 getter / setter 的方式获取/修改已在 OC 定义的 Property:
defineClass('SevenViewController',{
    viewDidLoad: function() {
        var data = self.data();     //get property value
        self.setData(data.toJS().push("JSPatch"));     //set property value
        console.log(self.data());
    },
})

//8.动态新增 Property
defineClass('EightViewController', ['data', 'totalCount'], {
    init: function() {
        self = self.super().init()
        self.setData(["a", "b"])     //添加新的 Property (id data)
        self.setTotalCount(2)
        return self
    },
            
    viewDidLoad: function() {
        var data = self.data()     //获取 Property 值
        console.log(data)
        var totalCount = self.totalCount()
        console.log(totalCount)
    },
})

//9.私有成员变量
defineClass('NightViewController' , {
    viewDidLoad: function() {
        var data = self.valueForKey("_data")     //get member variables
        self.setValue_forKey(["JSPatch"], "_data")     //set member variables
    },
})

//10.可以给一个类随意添加 OC 未定义的方法，但所有的参数类型都是 id:
var data = ["JS", "Patch"]
defineClass('TenViewController', {
    dataAtIndex: function(idx) {
    return idx < data.length ? data[idx]: ""
    }
})

//11.让一个类实现某些 Protocol 接口
defineClass("ElevenViewController: UIViewController <UIAlertViewDelegate>", {
    viewDidAppear: function(animated) {
        var alertView = require('UIAlertView')
          .alloc()
          .initWithTitle_message_delegate_cancelButtonTitle_otherButtonTitles(
            "Alert",
            self.dataSource().objectAtIndex(indexPath.row()),
            self,
            "OK",
            null
        )
        alertView.show()
    },
            
    alertView_clickedButtonAtIndex: function(alertView, buttonIndex) {
    console.log('clicked index ' + buttonIndex)
    }
})

//12.特殊类型

//Struct JSPatch原生支持 CGRect / CGPoint / CGSize / NSRange 这四个 struct 类型，用 JS 对象表示:,其它类型需要自己定义
defineClass('TwelveViewController', {
            
    viewWillAppear: function(animated) {
    //调用父类方法super
    self.super().viewWillAppear(animated);
    var label = UILabel.alloc().initWithFrame({x:20, y:100, width:100, height:100});
    label.setCenter({x: 250, y: 150});
    label.sizeThatFits({width: 100, height:100});
    label.setText('JS_Label');
    label.setBackgroundColor(UIColor.greenColor());
    self.view().addSubview(label);
            
    var x = view.frame().x
    var range = {location: 0, length: 1}
    },
        
});

//Selector
defineClass('TwelveViewController', {
            
    viewDidAppear: function(animated) {
        //调用父类方法super
        self.super().viewDidAppear(animated);
        //容易忘记方法名后面的冒号" : "
        self.performSelector_withObject_afterDelay("ocSelector:", "JS_Selector", 2.0)
    }
});

//nil(待处理)
defineClass('TwelveViewController', {
    testMethod: function() {
        console.log('test');
    },
            
//    NSData *data = [NSData dataWithContentsOfURL:[NSURL URLWithString:@""]];
    JSTestNull: function(nsnull) {
        console.log('1111111');
        var url = "123";
        var rawData = NSData.dataWithContentsOfURL(NSURL.URLWithString(url));
        console.log('3333333');
//        if (rawData != null) {} //这样判断是错误的
//        应该如下判断：
        if (!rawData) {
            console.log('1234');
        }
    }
});

//13.NSArray / NSString / NSDictionary 不会自动转成对应的JS类型，像普通 NSObject 一样使用它们:
require('JSObject')
defineClass('ThirteenViewController', {
    viewDidLoad: function() {
        self.super().viewDidLoad;
        self.view().setBackgroundColor(UIColor.greenColor());
            
        //不会自动转成对应的JS类型，像普通 NSObject 一样使用它们:
        var ocStr = JSObject.data().objectAtIndex(0)
        ocStr.appendString("Patch")
        
        var dict = JSObject.dict()
        dict.setObject_forKey(ocStr, 'name')
        console.log(dict.objectForKey('name'))
            
        //如果要把 NSArray / NSString / NSDictionary 转为对应的 JS 类型，使用 .toJS() 接口:
        var data = require('JSObject').data().toJS()
        //data instanceof Array === true
        data.push("andOC")
        
        var dict = JSObject.dict()
        dict.setObject_forKey(data.join(''), 'name')
        dict = dict.toJS()
        console.log(dict['name'])
    }
});

//14.Block
require('JSObject')
defineClass('FourteenViewController', {
    viewDidLoad: function() {
        self.super().viewDidLoad;
        self.view().setBackgroundColor(UIColor.redColor());
            
        //(1)当要把 JS 函数作为 block 参数给 OC时，需要先使用 block(paramTypes, function) 接口包装:
        JSObject.request(block("NSString *, BOOL", function(ctn, succ) {
            if (succ) console.log(ctn)  //output: I'm content
        }))
        
        //(2)从 OC 返回给 JS 的 block 会自动转为 JS function，直接调用即可:
        var blk = JSObject.genBlock();
        blk({v: "0.0.1"});  //output: I'm JSPatch, version: 0.0.1
            
        //(3)若要把这个从 OC 传过来的 block 再传回给 OC，同样需要再用 block() 包装，因为这里 blk 已经是一个普通的 JS function，跟我们上面定义的 JS function 没有区别：
        var blk1 = require('JSObject').genBlock();
        blk1({v: "0.0.2"});  //output: I'm JSPatch, version: 0.0.1
        require('JSObject').execBlock(block("id", blk1));
        
        //(4)block 里使用 self 变量
        //在 block 里无法使用 self 变量，需要在进入 block 之前使用临时变量保存它:
        var JSSelf = self;
        require("JSTestObject").callBlock(block(function(){
            //`self` is not available here, use `slf` instead.
            JSSelf.doSomething();
        }));
                            
        //(5)从 JS 传 block 到 OC，有两个限制：
//          A. block 参数个数最多支持6个。（若需要支持更多，可以修改源码）
//          B. block 参数类型不能是 double。
//          另外不支持 JS 封装的 block 传到 OC 再传回 JS 去调用
        
        //(6)__weak / __strong
        var weakSelf = __weak(self);
        self.setCompelectBlock(block(function(){
//            weakSelf.blabla...
             var strongSelf = __strong(weakSelf);
//            strongSelf.balala....
        }))
    }
});

//15.GCD
defineClass('FifteenViewController', {
    viewDidLoad: function() {
        self.super().viewDidLoad;
        self.view().setBackgroundColor(UIColor.blueColor());
        //JS
        dispatch_after(1.0, function(){
             console.log('after 1.0')
        }),
    
        dispatch_async_main(function(){
             console.log('async_main')
        }),
    
        dispatch_sync_main(function() {
             console.log('sync_main')
        }),
        
        dispatch_async_global_queue(function() {
             console.log('async_global_queue')
        })
    }
})

//16.传递 id* 参数(???)
require('JPEngine').addExtensions(['JPMemory'])
defineClass('SixteenViewController', {
    testPointer: function(error) {
    var  tmp = require('NSError').errorWithDomain_code_userInfo("test", 1, null);
    var newErrorPointer = getPointer(tmp);
    console.log('2');
    console.log(tmp);
    memcpy(error, newErrorPointer, sizeof('id'));
    }
})


//17.常量、枚举、宏、全局变量
require('NSAttributedString')
defineClass('SeventeenViewController', {
            //(1)Objective-C 里的常量/枚举不能直接在 JS 上使用，可以直接在 JS 上用具体值代替
            JSButton: function() {
                var button = UIButton.alloc().initWithFrame({x: 250, y: 100, width: 100, height: 100});
                button.setBackgroundColor(UIColor.greenColor());
                var UIControlEventTouchUpInside  = 1 << 6;
                button.addTarget_action_forControlEvents(self, 'JSClick', UIControlEventTouchUpInside);
                self.view().addSubview(button);
            },
            
            testJSConstStr: function() {
                //(2)有些常量字符串，需要在 OC 用 NSLog 打出看看它的值是什么
                var JSConstStr = NSAttributedString.alloc().initWithString_attributes("无效啊", {'NSColor': UIColor.redColor()});
                console.log('123');
                console.log(JSConstStr);
            }
})

//18.宏
require('UIScreen')
//require('JPEngine').addExtensions(['EighteenViewController'])
defineClass('EighteenViewController', {
            viewDidLoad: function() {
                self.super().viewDidLoad();
                //(1)//Objective-C 里的宏同样不能直接在 JS 上使用。若定义的宏是一个值，可以在 JS 定义同样的全局变量代替，若定义的宏是程序，可以在JS展开宏：
                var screenWidth = UIScreen.mainScreen().bounds().width;
                console.log(screenWidth);
            
                //(2)若宏的值是某些在底层才能获取到的值，例如 CGFLOAT_MIN，可以通过在某个类或实例方法里将它返回，或者用添加扩展的方式提供支持：
                //OC函数返回
            
                //添加扩展提供支持
                var floatMin = CGFLOAT_MIN();
            }
})

//19.全局变量
//在类里定义的 static 全局变量无法在 JS 上获取到，若要在 JS 拿到这个变量，需要在 OC 有类方法或实例方法把它返回
defineClass('NighteenViewController', {
            viewDidLoad: function() {
                self.super().viewDidLoad();
                self.view().setBackgroundColor(UIColor.redColor());
                var name = NighteenViewController.name();
                console.log(name);
            }
})








