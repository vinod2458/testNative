//
//  ViewController.m
//  testNative
//
//  Created by TestMachine on 7/6/16.
//  Copyright © 2016 TestMachine. All rights reserved.
//

#import "ViewController.h"
#import <Cordova/CDVViewController.h>
@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    CDVViewController* viewController = [CDVViewController new];
    [self.view addSubview:viewController.view];
    viewController.view.frame = CGRectMake(0, 0, 320, 480);
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
