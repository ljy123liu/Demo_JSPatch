require('UIView, UIColor, UILabel, UIImageView')

//多方法调用，用” , ”隔开
defineClass('HomeViewController', {
    
    viewWillAppear: function(animated) {
        //调用父类方法
        self.super().viewWillAppear(animated);
        var str = "view will appear";
//        console.log(str);
        
    },
            
    viewWillDisappear: function(animated) {
        self.super().viewWillDisappear(animated);
//            console.log("view will disappear");
    },
            
    //UI相关
    creatView: function() {
        console.log("123");
        var view = UIView.alloc().initWithFrame({x:20, y:20, width:100, height:100});
        view.setBackgroundColor(UIColor.greenColor());
        var label = UILabel.alloc().initWithFrame({x:0, y:0, width:100, height:100});
        label.setText("JSPatch");
        label.setTextAlignment(1);
        view.addSubview(label);
        self.view().addSubview(view)
    },
    
    //多参数用 " _ "连接
    tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
            console.log(indexPath.row());
    },
    
    
    //双下划线替换OC中的单下划线(分号中不能再有分号)
    __dataSource: function() {
//        console.log("JS双下划线:'__',替换OC中单下划线:'_'");
    },
            
    beforeMethod: function() {
        console.log("JS:覆盖之前的方法");
    },
    
            
    ORIGbeforeMethod: function() {
        console.log("JS:覆盖之后的方法");
    },
            
});

//用调用 getter / setter 的方式获取/修改已在 OC 定义的 Property:
//defineClass('HomeViewController' ,{
//    viewDidLoad: function() {
//        var data = self.data();     //get property value
//        self.setData(data.toJS().push("JSPatch"));     //set property value
//    },
//})

//动态新增 Property
defineClass("HomeViewController", ['data', 'totalCount'], {
    init: function() {
        self = self.super().init()
        self.setData(["a", "b"])     //添加新的 Property (id data)
        self.setTotalCount(2)
        return self
    },
//    viewDidLoad: function() {
//        var data = self.data()     //获取 Property 值
//        var totalCount = self.totalCount()
//    },
})

//私有成员变量
//defineClass("HomeViewController" , {
//    viewDidLoad: function() {
////        var data = self.valueForKey("_data")     //get member variables
////        self.setValue_forKey(["JSPatch"], "_data")     //set member variables
//            
////        var str = self.testStr();     //get property value
////        self.setStr(testStr.toJS().push("JSPatch"));     //set property value
//    },
//})

//覆盖类方法,实例方法在第二个参数，类方法放在第三个参数
//defineClass("NSObject",{
//    methodA: (){
//    //实例方法
//    }
//},{
//    //类方法
//    classMethodB: (){
//        
//    }
//}
//})










