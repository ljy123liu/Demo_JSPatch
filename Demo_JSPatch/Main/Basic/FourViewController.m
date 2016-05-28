//
//  FourViewController.m
//  Demo_JSPatch
//
//  Created by LIUYONG on 16/5/26.
//  Copyright © 2016年 WanJianTechnology. All rights reserved.
//

#import "FourViewController.h"

@interface FourViewController ()

@end

@implementation FourViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];
    [self _dataSource];
}

- (void)_dataSource {
    NSLog(@"OC Method dataSource");
}
@end