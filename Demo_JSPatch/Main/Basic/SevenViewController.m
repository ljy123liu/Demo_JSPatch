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
//    self.data = @[@"1"];
    
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    NSLog(@"%@",self.data);
}

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    NSLog(@"property:%@",self.data);
}

- (NSArray *)data {
    if (!_data) {
        _data = @[@"1",@"2"];
    }
    return _data;
}
@end
