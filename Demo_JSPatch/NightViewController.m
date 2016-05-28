//
//  NightViewController.m
//  Demo_JSPatch
//
//  Created by LIUYONG on 16/5/27.
//  Copyright © 2016年 WanJianTechnology. All rights reserved.
//

#import "NightViewController.h"

@implementation NightViewController
{
    NSArray *_data;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];
}


- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    self.view.backgroundColor = [UIColor whiteColor];
    NSLog(@"data:%@",_data);
}

@end
