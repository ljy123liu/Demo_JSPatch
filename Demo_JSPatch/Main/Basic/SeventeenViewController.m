//
//  SeventeenViewController.m
//  Demo_JSPatch
//
//  Created by LIUYONG on 16/5/28.
//  Copyright © 2016年 WanJianTechnology. All rights reserved.
//

#import "SeventeenViewController.h"

@implementation SeventeenViewController
- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];
    UIButton *button = [[UIButton alloc]initWithFrame:CGRectMake(100, 100, 100, 100)];
    button.backgroundColor = [UIColor blueColor];
    [self.view addSubview:button];
    [button addTarget:self action:@selector(buttonClick) forControlEvents:UIControlEventTouchUpInside];
    
    [self JSButton];
    [self testOCConstStr];
    [self testJSConstStr];
}

- (void)buttonClick {
    NSLog(@"OC Button");
}

- (void)JSButton {
    
}

- (void)JSClick {
    NSLog(@"JS Button");
}

- (void)testOCConstStr {
    NSAttributedString *attributedStr = [[NSAttributedString alloc] initWithString:@"str" attributes:@{NSForegroundColorAttributeName: [UIColor redColor]}];
    NSLog(@"%@ color type is %@:",attributedStr, NSForegroundColorAttributeName); //output 'NSColor'
}

- (void)testJSConstStr {
    
}

@end
