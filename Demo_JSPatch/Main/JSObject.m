//
//  JSObject.m
//  Demo_JSPatch
//
//  Created by LIUYONG on 16/5/27.
//  Copyright © 2016年 WanJianTechnology. All rights reserved.
//

#import "JSObject.h"
static NSString *name;
@implementation JSObject
+ (NSString *)name {
    return name;
}

+ (NSArray *)data {
    return @[[NSMutableString stringWithString:@"JS"]];
}
+ (NSMutableDictionary *)dict {
    return [[NSMutableDictionary alloc] init];
}

+ (void)request:(void(^)(NSString *content, BOOL success))callback {
    callback(@"I'm content", YES);
}



typedef void (^JSBlock)(NSDictionary *dict);
+ (JSBlock)genBlock {
    NSString *ctn = @"JSPatch";
    JSBlock block = ^(NSDictionary *dict) {
        NSLog(@"I'm %@, version: %@", ctn, dict[@"v"]);
    };
    return block;
}
+ (void)execBlock:(JSBlock)blk {
    
}

//weak strong
- (void)testWeak {
    __weak typeof(self) weakSelf = self;
    [self setCompelectBlock:^(NSDictionary *dict) {
//        weakSelf.....
    }];
}

- (void)setCompelectBlock:(JSBlock)block{
    
}

//使用OC函数返回宏的值
+ (void)returnCGFloat {
    
}



















@end
