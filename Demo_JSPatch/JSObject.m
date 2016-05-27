//
//  JSObject.m
//  Demo_JSPatch
//
//  Created by LIUYONG on 16/5/27.
//  Copyright © 2016年 WanJianTechnology. All rights reserved.
//

#import "JSObject.h"

@implementation JSObject
+ (NSArray *)data
{
    return @[[NSMutableString stringWithString:@"JS"]];
}
+ (NSMutableDictionary *)dict
{
    return [[NSMutableDictionary alloc] init];
}
@end
