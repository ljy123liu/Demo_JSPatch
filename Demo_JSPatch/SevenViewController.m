//
//  SevenViewController.m
//  Demo_JSPatch
//
//  Created by LIUYONG on 16/5/26.
//  Copyright © 2016年 WanJianTechnology. All rights reserved.
//

#import "SevenViewController.h"

@interface SevenViewController ()
@property (nonatomic, strong) NSArray *data;
@end

@implementation SevenViewController
- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];
    self.data = @[@"1"];
    NSLog(@"%@",self.data);
}
@end
