//
//  SixViewController.m
//  Demo_JSPatch
//
//  Created by LIUYONG on 16/5/26.
//  Copyright © 2016年 WanJianTechnology. All rights reserved.
//

#import "SixViewController.h"

@interface SixViewController ()

@end

@implementation SixViewController
- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];
    [self methodA];
    [SixViewController classMethodB];
}

- (void)methodA {
    NSLog(@"实例方法");
}

+ (void)classMethodB {
    NSLog(@"类方法");
}
@end

