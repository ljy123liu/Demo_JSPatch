//
//  TwoViewController.m
//  Demo_JSPatch
//
//  Created by LIUYONG on 16/5/26.
//  Copyright © 2016年 WanJianTechnology. All rights reserved.
//

#import "TwoViewController.h"

@interface TwoViewController ()

@end

@implementation TwoViewController
- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];
    [self creatView];
}


- (void)creatView{
    UILabel *label = [[UILabel alloc] initWithFrame:CGRectMake(100, 100, 100, 100)];
    label.backgroundColor = [UIColor redColor];
    [self.view addSubview:label];
}

@end
