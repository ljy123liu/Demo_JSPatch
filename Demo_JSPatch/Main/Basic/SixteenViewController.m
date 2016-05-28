//
//  SixteenViewController.m
//  Demo_JSPatch
//
//  Created by LIUYONG on 16/5/28.
//  Copyright © 2016年 WanJianTechnology. All rights reserved.
//

#import "SixteenViewController.h"

@implementation SixteenViewController
- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];
    NSError *error = nil;
    [self testPointer:&error];
}

- (void)testPointer:(NSError **)error {
    NSError *err = [[NSError alloc]initWithDomain:@"com.jspatch" code:42 userInfo:nil];
    *error = err;
}

@end
