var a, w;

App = {
    size: {
        width: 850,
        height: 925,
    },
    room: {
        width: 700,
        height: 600,
    },
    button: {
        width: 50,
        height: 50,
    },

    load_sprites() {
        Crafty.sprite("pics/ac-off.png", {
            acOff: [0, 0, 30, 80]
        });
        Crafty.sprite("pics/ac-on.png", {
            acOn: [0, 0, 30, 80]
        });
        Crafty.sprite("pics/bed.png", {
            bed: [0, 0, 280, 130]
        });
        Crafty.sprite("pics/button-bg.png", {
            buttonBg: [0, 0, 850, 150]
        });
        Crafty.sprite("pics/chair.png", {
            chair: [0, 0, 60, 60]
        });
        Crafty.sprite("pics/desk.png", {
            desk: [0, 0, 60, 60]
        });
        Crafty.sprite("pics/desk-vc-off.png", {
            deskVcOff: [0, 0, 60, 60]
        });
        Crafty.sprite("pics/desk-vc-on.png", {
            deskVcOn: [0, 0, 60, 60]
        });
        Crafty.sprite("pics/door-0.png", {
            door0: [0, 0, 120, 120]
        });
        Crafty.sprite("pics/door-1.png", {
            door1: [0, 0, 120, 120]
        });
        Crafty.sprite("pics/door-2.png", {
            door2: [0, 0, 120, 120]
        });
        Crafty.sprite("pics/hallway-side.png", {
            hallwaySide: [0, 0, 700, 150]
        });
        Crafty.sprite("pics/hallway-up.png", {
            hallwayUp: [0, 0, 150, 750]
        });
        Crafty.sprite("pics/nurse.png", {
            nurse: [0, 0, 60, 60]
        });
        Crafty.sprite("pics/speaker.png", {
            speaker: [0, 0, 20, 50]
        });
        Crafty.sprite("pics/tv-dashboard.png", {
            tvDashboard: [0, 0, 60, 300]
        });
        Crafty.sprite("pics/wall.png", {
            wall: [0, 0, 700, 600]
        });
        var windows = {
            "sprites": {
                "pics/windows.png": {
                    tile: 600,
                    tileh: 20,
                    map: {
                        window0: [0, 0],
                        window1: [0, 1],
                        window2: [0, 2],
                        window3: [0, 3]
                    }
                }
            }
        };
        var airWaves = {
            "sprites": {
                "pics/air-waves.png": {
                    tile: 60,
                    tileh: 60,
                    map: {
                        airNone: [0, 0],
                        air1: [0, 1],
                        air2: [0, 2]
                    }
                }
            }
        };
        Crafty.load(windows);
        Crafty.load(airWaves);
        /*
        Crafty.sprite("pics/window-0.png", {
            window0: [0, 0, 600, 20]
        });
        Crafty.sprite("pics/window-1.png", {
            window1: [0, 0, 600, 20]
        });
        Crafty.sprite("pics/window-2.png", {
            window2: [0, 0, 600, 20]
        });
        Crafty.sprite("pics/window-3.png", {
            window3: [0, 0, 600, 20]
        });
        */
    },

    build_room() {
        // button background
        Crafty.e('2D, Canvas, buttonBg')
            .attr({
                x: 0,
                y: 775,
                w: App.size.width,
                h: 150,
            });

        // hospital room
        Crafty.e('2D, Canvas, Color, wall')
            .attr({
                x: 0,
                y: 0,
                w: App.room.width,
                h: App.room.height,
            })

        // hallway1
        Crafty.e('2D, Canvas, hallwaySide')
            .attr({
                x: 0,
                y: App.room.height,
                w: App.room.width,
                h: 150,
            });

        // hallway2
        Crafty.e('2D, Canvas, hallwayUp')
            .attr({
                x: App.room.width,
                y: 0,
                w: 150,
                h: 750,
            });

        // bed
        Crafty.e('2D, Canvas, Mouse, bed')
            .attr({
                x: 25,
                y: this.room.height / 2 - 65,
                w: 280,
                h: 130,
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('bed');
                //document.getElementById('bed').style.display = 'block';
            });

        // desk
        Crafty.e('2D, Canvas, desk')
            .attr({
                x: 25,
                y: 165, // 10 out from bed
                w: 60,
                h: 60,
            });

        // desk with voice assistant
        Crafty.e('2D, Canvas, deskVcOff, Mouse')
            .attr({
                x: 25,
                y: 375, // 10 out from bed
                w: 60,
                h: 60,
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('voice-assistant');
            });

        // a/c
        Crafty.e('2D, Canvas, acOff, Mouse')
            .attr({
                x: 20,
                y: 490,
                w: 30,
                h: 80,
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('ac');
            });

        a = Crafty.e('2D, Canvas, airNone, SpriteAnimation')
            .attr({
                x: 60,
                y: 500
            });

        a.reel("blowing", 2000, [
            [0, 1],
            [0, 2],
            [0, 1],
            [0, 2],
            [0, 1],
            [0, 2],
            [0, 1],
            [0, 2],
            [0, 0]
        ]);
        // window
        w = Crafty.e('2D, Canvas, window0, Mouse, SpriteAnimation')
            .attr({
                x: 50,
                y: 0
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('window');
            });
        w.reel("closing", 2000, [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3]
        ]);
        // chair
        Crafty.e('2D, Canvas, chair')
            .attr({
                x: 200,
                y: 70,
                w: 60,
                h: 60,
            });

        // chair
        Crafty.e('2D, Canvas, chair')
            .attr({
                x: 360,
                y: 70,
                w: 60,
                h: 60,
            });

        // TV/dashboard
        Crafty.e('2D, Canvas, tvDashboard, Mouse')
            .attr({
                x: 660,
                y: this.room.height / 2 - 150,
                w: 60,
                h: 300,
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('dashboard');
            });

        // doorway
        Crafty.e('2D, Canvas, door0')
            .attr({
                x: 500,
                y: 480,
                w: 120,
                h: 120,
            });

        // speaker1
        Crafty.e('2D, Canvas, speaker, Mouse')
            .attr({
                x: 660,
                y: 70,
                w: 20,
                h: 50,
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('speaker');
            });

        // speaker2
        Crafty.e('2D, Canvas, speaker, Mouse')
            .attr({
                x: 660,
                y: 480,
                w: 20,
                h: 50,
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('speaker');
            });

        // nurse
        Crafty.e('2D, Canvas, nurse, Mouse')
            .attr({
                x: App.room.width + 45,
                y: App.room.height / 2 - 30,
                w: 60,
                h: 60,
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('nurse');
            });

    },

    build_buttons() {
        // load temp
        Crafty.sprite("pics/heart.png", {
            heart: [0, 0, 100, 100]
        });
        Crafty.sprite("pics/sleeping.png", {
            sleep: [0, 0, 100, 100]
        });
        Crafty.sprite("pics/temp.png", {
            temp: [0, 0, 100, 100]
        });

        // Temperature
        Crafty.e('2D, Canvas, Color, Mouse')
            .attr({
                x: 50,
                y: 815,
                w: 70,
                h: 70,
            })
            .color('rgb(255, 0, 0)')
            .bind('Click', function(MouseEvent) {
                // Show temperature icon above patient
                Crafty.e('2D, Canvas, Tween, temp')
                    .attr({
                        x: 50,
                        y: 200
                    })
                    // Show temperature icon above patient
                    .tween({
                        y: 190
                    }, 200).bind("TweenEnd", function() {
                        this.unbind("TweenEnd");
                        this.tween({
                            alpha: 1.0
                        }, 2000);

                        a.animate("blowing", 1);

                        this.bind("TweenEnd", function() {
                            this.tween({
                                alpha: 0.0,
                            }, 500);
                        });
                    });
            });
        // Show A/C is turned on
        // replace a/c with ON version
        // show waves coming out a/c
        // Caption the event: show text
        /*
                Crafty.e("2D, DOM, gameTitle, Tween").attr({
                    x: 295,
                    y: 0
                }).tween({
                    y: 65
                }, 60).bind("TweenEnd", function() {
                    this.unbind("TweenEnd");
                    this.tween({
                        y: 55
                    }, 20);
                    this.bind("TweenEnd", function() {
                        this.tween({
                            y: 65,
                        }, 20);
                    });
                });
        */

        // Sleeping
        Crafty.e('2D, Canvas, Color, Mouse')
            .attr({
                x: 145,
                y: 815,
                w: 70,
                h: 70,
            })
            .color('rgb(255, 0, 0)')
            .bind('Click', function(MouseEvent) {
                // Show temperature icon above patient
                Crafty.e('2D, Canvas, Tween, sleep')
                    .attr({
                        x: 50,
                        y: 200
                    })
                    // Show temperature icon above patient
                    .tween({
                        y: 190
                    }, 200).bind("TweenEnd", function() {
                        this.unbind("TweenEnd");
                        this.tween({
                            alpha: 1.0
                        }, 2000);
                        w.animate("closing", 1);
                        this.bind("TweenEnd", function() {
                            this.tween({
                                alpha: 0.0,
                            }, 500);

                        });
                    });
            });


        // Heart
        Crafty.e('2D, Canvas, Color, Mouse')
            .attr({
                x: 240,
                y: 815,
                w: 70,
                h: 70,
            })
            .color('rgb(255, 0, 0)')
            .bind('Click', function(MouseEvent) {
                // Show temperature icon above patient
                Crafty.e('2D, Canvas, Tween, heart')
                    .attr({
                        x: 50,
                        y: 200
                    })
                    // Show temperature icon above patient
                    .tween({
                        y: 190
                    }, 200).bind("TweenEnd", function() {
                        this.unbind("TweenEnd");
                        this.tween({
                            alpha: 1.0
                        }, 3000);
                        this.bind("TweenEnd", function() {
                            this.tween({
                                alpha: 0.0,
                            }, 500);
                        });
                    });
            });

        // Voice-chat
        Crafty.e('2D, Canvas, Color, Mouse')
            .attr({
                x: 335,
                y: 815,
                w: 70,
                h: 70,
            })
            .color('rgb(255, 0, 0)')
            .bind('Click', function(MouseEvent) {
                // Show temperature icon above patient
                Crafty.e('2D, Canvas, Tween, temp')
                    .attr({
                        x: 50,
                        y: 200
                    })
                    // Show temperature icon above patient
                    .tween({
                        y: 190
                    }, 200).bind("TweenEnd", function() {
                        this.unbind("TweenEnd");
                        this.tween({
                            alpha: 1.0
                        }, 3000);
                        this.bind("TweenEnd", function() {
                            this.tween({
                                alpha: 0.0,
                            }, 500);
                        });
                    });
            });

        // Reading
        Crafty.e('2D, Canvas, Color, Mouse')
            .attr({
                x: 430,
                y: 815,
                w: 70,
                h: 70,
            })
            .color('rgb(255, 0, 0)')
            .bind('Click', function(MouseEvent) {
                // Show temperature icon above patient
                Crafty.e('2D, Canvas, Tween, temp')
                    .attr({
                        x: 50,
                        y: 200
                    })
                    // Show temperature icon above patient
                    .tween({
                        y: 190
                    }, 200).bind("TweenEnd", function() {
                        this.unbind("TweenEnd");
                        this.tween({
                            alpha: 1.0
                        }, 3000);
                        this.bind("TweenEnd", function() {
                            this.tween({
                                alpha: 0.0,
                            }, 500);
                        });
                    });
            });

        // TV
        Crafty.e('2D, Canvas, Color, Mouse')
            .attr({
                x: 525,
                y: 815,
                w: 70,
                h: 70,
            })
            .color('rgb(255, 0, 0)')
            .bind('Click', function(MouseEvent) {
                // Show temperature icon above patient
                Crafty.e('2D, Canvas, Tween, temp')
                    .attr({
                        x: 50,
                        y: 200
                    })
                    // Show temperature icon above patient
                    .tween({
                        y: 190
                    }, 200).bind("TweenEnd", function() {
                        this.unbind("TweenEnd");
                        this.tween({
                            alpha: 1.0
                        }, 3000);
                        this.bind("TweenEnd", function() {
                            this.tween({
                                alpha: 0.0,
                            }, 500);
                        });
                    });
            });

        // Music
        Crafty.e('2D, Canvas, Color, Mouse')
            .attr({
                x: 620,
                y: 815,
                w: 70,
                h: 70,
            })
            .color('rgb(255, 0, 0)')
            .bind('Click', function(MouseEvent) {
                // Show temperature icon above patient
                Crafty.e('2D, Canvas, Tween, temp')
                    .attr({
                        x: 50,
                        y: 200
                    })
                    // Show temperature icon above patient
                    .tween({
                        y: 190
                    }, 200).bind("TweenEnd", function() {
                        this.unbind("TweenEnd");
                        this.tween({
                            alpha: 1.0
                        }, 3000);
                        this.bind("TweenEnd", function() {
                            this.tween({
                                alpha: 0.0,
                            }, 500);
                        });
                    });
            });


        /*
        Build buttons:
        - Patient temperature
        - Sleeping
        - Heart rate
        - Voice
        - Reading
        - TV
        - Music (as part of sleeping or whatever)
        */
    },

    start: function() {
        Crafty.init(App.size.width, App.size.height, document.getElementById('app'));
        //Crafty.background('rgb(0, 255, 255)');

        App.load_sprites();
        App.build_room();
        App.build_buttons();


    }
}
