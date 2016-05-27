//
//  TwelveViewController.m
//  Demo_JSPatch
//
//  Created by LIUYONG on 16/5/27.
//  Copyright © 2016年 WanJianTechnology. All rights reserved.
//

#import "TwelveViewController.h"

@implementation TwelveViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];
    UILabel *label = [[UILabel alloc] initWithFrame:CGRectMake(20, 20, 100, 100)];
    label.backgroundColor = [UIColor redColor];
    [label setCenter:CGPointMake(100,150)];
    [label sizeThatFits:CGSizeMake(100, 100)];
    label.text = @"OC_Label";
    CGFloat x = label.frame.origin.x;
    [self.view addSubview:label];
    NSLog(@"positionX:%f",x);
    
    NSRange range = NSMakeRange(0, 1);
    NSString *str = @"dljfaj";
    NSString *subStr = [str substringWithRange:range];
    NSLog(@"subStr:%@",subStr);
    
    [self performSelector:@selector(ocSelector:) withObject:@"ocSelector"];
    
    if ([self JSTestNull:NULL]) {
        NSLog(@"null");
    }else {
        NSLog(@"not null");
    }
    
    [self testMethod];
}

- (void)ocSelector:(NSString *)obj {
    NSLog(@"ocSelector:%@",obj);
}

- (BOOL)JSTestNull:(NSNull *)nsnull {
    return [nsnull isKindOfClass:[NSNull class]];
}

- (void)testMethod {
    NSLog(@"oc Test");
    NSData *data = [NSData dataWithContentsOfURL:[NSURL URLWithString:@""]];
}


@end
