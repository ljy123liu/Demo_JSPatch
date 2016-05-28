//
//  TenViewController.m
//  Demo_JSPatch
//
//  Created by LIUYONG on 16/5/27.
//  Copyright © 2016年 WanJianTechnology. All rights reserved.
//  可以给一个类随意添加 OC 未定义的方法，但所有的参数类型都是 id:

#import "TenViewController.h"

@implementation TenViewController
- (void)viewDidLoad{
    self.view.backgroundColor = [UIColor whiteColor];
    NSString* data = [self dataAtIndex:@(1)];
    NSLog(@"%@", data);      //output: Patch
}
@end
