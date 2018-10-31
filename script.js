var a, ac, w, n;

App = {
    size: {
        width: 850,
        height: 1050,
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
        Crafty.sprite("pics/hallway-side.png", {
            hallwaySide: [0, 0, 700, 150]
        });
        Crafty.sprite("pics/hallway-up.png", {
            hallwayUp: [0, 0, 150, 750]
        });
        Crafty.sprite("pics/nurse.png", {
            nurse: [0, 0, 60, 60]
        });
        Crafty.sprite("pics/tv-dashboard.png", {
            tvDashboard: [0, 0, 60, 300]
        });
        Crafty.sprite("pics/wall.png", {
            wall: [0, 0, 700, 600]
        });

        var ac = {
            "sprites": {
                "pics/ac.png": {
                    tile: 90,
                    tileh: 80,
                    map: {
                        acOff: [0, 0],
                        acOn1: [0, 1],
                        acOn2: [0, 2]
                    }
                }
            }
        };

        var doors = {
            "sprites": {
                "pics/doors.png": {
                    tile: 120,
                    tileh: 120,
                    map: {
                        dClosed: [0, 0],
                        dHalf: [0, 1],
                        dOpen: [0, 2]
                    }
                }
            }
        };

        var speakers = {
            "sprites": {
                "pics/speakers.png": {
                    tile: 60,
                    tileh: 70,
                    map: {
                        sOff: [0, 0],
                        s0: [0, 1],
                        s1: [0, 2]
                    }
                }
            }
        };

        var windows = {
            "sprites": {
                "pics/w-test.png": {
                    tile: 600,
                    tileh: 91,
                    map: {
                        w0: [0, 0],
                        w1: [0, 1],
                        w2: [0, 2],
                        w3: [0, 3],
                        w4: [0, 4],
                        w5: [0, 5],
                        w6: [0, 6],
                        w7: [0, 7]
                    }
                }
            }
        };

        Crafty.load(ac);
        Crafty.load(doors);
        Crafty.load(speakers);
        Crafty.load(windows);
    },

    build_room() {
        // button background
        Crafty.e('2D, Canvas, buttonBg')
            .attr({
                x: 0,
                y: App.size.height - 150,
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
        a = Crafty.e('2D, Canvas, acOff, Mouse, SpriteAnimation')
            .attr({
                x: 20,
                y: 490,
                w: 90,
                h: 80,
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('ac');
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
        w = Crafty.e('2D, Canvas, w0, Mouse, SpriteAnimation')
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
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6]
        ]);
        w.reel("opening", 500, [
            [0, 0],
            [0, 7]
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

        // door
        d = Crafty.e('2D, Canvas, dClosed, SpriteAnimation')
            .attr({
                x: 500,
                y: 480,
                w: 120,
                h: 120,
            });
        d.reel("dOpening", 1000, [
            [0, 0],
            [0, 1],
            [0, 2]
        ]);

        // speaker1
        s1 = Crafty.e('2D, Canvas, sOff, Mouse, SpriteAnimation')
            .attr({
                x: 660,
                y: 70,
                w: 20,
                h: 50,
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('speaker');
            });
        s1.reel("music", 2000, [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 0]
        ]);

        // speaker2
        s2 = Crafty.e('2D, Canvas, sOff, Mouse, SpriteAnimation')
            .attr({
                x: 660,
                y: 480,
                w: 20,
                h: 50,
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('speaker');
            });
        s2.reel("music", 2000, [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 0]
        ]);
        // nurse
        n = Crafty.e('2D, Canvas, nurse, Mouse, Tween')
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
                y: App.size.height - 110,
                w: 70,
                h: 70,
            })
            .color('rgb(255, 0, 0)')
            .bind('Click', function(MouseEvent) {
                // Show temperature icon above patient
                captionThis('temp');
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
                        w.animate("opening", 1);
                        this.bind("TweenEnd", function() {
                            this.tween({
                                alpha: 0.0,
                            }, 500);
                        });
                    });
            });

        // Sleeping
        Crafty.e('2D, Canvas, Color, Mouse')
            .attr({
                x: 145,
                y: App.size.height - 110,
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
                        s1.animate("music", 1);
                        s2.animate("music", 1);
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
                y: App.size.height - 110,
                w: 70,
                h: 70,
            })
            .color('rgb(255, 0, 0)')
            .bind('Click', function(MouseEvent) {
                Crafty.e('2D, Canvas, Tween, heart')
                    .attr({
                        x: 50,
                        y: 200
                    })

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

                n.tween({y: 635}, 100).bind("TweenEnd", function() {
                    this.unbind("TweenEnd");
                    this.tween({
                        x: 530
                    }, 100);
                });
                d.animate("dOpening", 1);

                n.tween({y: 400}, 100).bind("TweenEnd", function() {
                    this.unbind("TweenEnd");
                    this.tween({
                        x: 50
                    }, 100);
                });
            });

        // Voice-chat
        Crafty.e('2D, Canvas, Color, Mouse')
            .attr({
                x: 335,
                y: App.size.height - 110,
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
                y: App.size.height - 110,
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
                y: App.size.height - 110,
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
                y: App.size.height - 110,
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
    },

    start: function() {
        Crafty.init(App.size.width, App.size.height, document.getElementById('app'));

        App.load_sprites();
        App.build_room();
        App.build_buttons();
    }
}
