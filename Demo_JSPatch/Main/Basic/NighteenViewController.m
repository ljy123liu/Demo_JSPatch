//
//  NighteenViewController.m
//  Demo_JSPatch
//
//  Created by LIUYONG on 16/5/28.
//  Copyright © 2016年 WanJianTechnology. All rights reserved.
//

#import "NighteenViewController.h"
static NSString *name = @"LJY";

@implementation NighteenViewController
- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];
}

+ (NSString *)name {
    return name;
}
@end
