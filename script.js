var a, ac, b, n, w, v;

App = {
    size: {
        width: 850,
        height: 1050,
    },
    room: {
        width: 700,
        height: 600,
    },

    load_sprites() {
        Crafty.sprite("pics/button-bg.png", {
            buttonBg: [0, 0, 850, 150]
        });
        Crafty.sprite("pics/chair.png", {
            chair: [0, 0, 60, 60]
        });
        Crafty.sprite("pics/desk.png", {
            desk: [0, 0, 60, 60]
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

        var bed = {
            "sprites": {
                "pics/bed.png": {
                    tile: 285,
                    tileh: 130,
                    map: {
                        bedOff: [0, 0],
                        bedOn: [0, 1]
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

        var vc = {
            "sprites": {
                "pics/vc.png": {
                    tile: 60,
                    tileh: 60,
                    map: {
                        vOff: [0, 0],
                        vOn: [0, 1]
                    }
                }
            }
        }

        Crafty.load(ac);
        Crafty.load(bed);
        Crafty.load(doors);
        Crafty.load(speakers);
        Crafty.load(windows);
        Crafty.load(vc);
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
        b = Crafty.e('2D, Canvas, Mouse, bedOff, SpriteAnimation')
            .attr({
                x: 20,
                y: this.room.height / 2 - 65,
                w: 285,
                h: 130,
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('bed');
                //document.getElementById('bed').style.display = 'block';
            });
        b.reel("bedLightOn", 2000, [
            [0, 1]
        ]);
        b.reel("bedLightOff", 2000, [
            [0, 0]
        ]);

        // desk
        Crafty.e('2D, Canvas, desk')
            .attr({
                x: 25,
                y: 165, // 10 out from bed
                w: 60,
                h: 60,
            });

        // desk with voice assistant
        v = Crafty.e('2D, Canvas, vOff, Mouse, SpriteAnimation')
            .attr({
                x: 25,
                y: 375, // 10 out from bed
                w: 60,
                h: 60,
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('voice-assistant');
            });
        v.reel("listening", 6000, [
            [0, 1],
            [0, 0]
        ]);

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
        w.reel("opening", 1000, [
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
        d.reel("dClosing", 1000, [
            [0, 2],
            [0, 1],
            [0, 0]
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
        Crafty.sprite("pics/book.png", {
            reading: [0, 0, 128, 128]
        });
        Crafty.sprite("pics/good.png", {
            good: [0, 0, 128, 128]
        });
        Crafty.sprite("pics/heart.png", {
            heart: [0, 0, 128, 128]
        });
        Crafty.sprite("pics/medicine.png", {
            medicine: [0, 0, 128, 128]
        });
        Crafty.sprite("pics/sleep.png", {
            sleep: [0, 0, 128, 128]
        });
        Crafty.sprite("pics/speech.png", {
            speech: [0, 0, 128, 128]
        });
        Crafty.sprite("pics/temp.png", {
            temp: [0, 0, 128, 128]
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
                        x: 90,
                        y: 200
                    })
                    // Show temperature icon above patient
                    .tween({
                        y: 150
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
                        x: 90,
                        y: 200
                    })
                    // Show temperature icon above patient
                    .tween({
                        y: 150
                    }, 200).bind("TweenEnd", function() {
                        this.unbind("TweenEnd");
                        this.tween({
                            alpha: 1.0
                        }, 2000);
                        b.animate("bedLightOff", 1);
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
                        x: 90,
                        y: 200
                    })

                    .tween({
                        y: 150
                    }, 200).bind("TweenEnd", function() {
                        this.unbind("TweenEnd");
                        this.tween({
                            alpha: 1.0
                        }, 2000);
                        this.bind("TweenEnd", function() {
                            this.tween({
                                alpha: 0.0,
                            }, 500);
                        });
                    });

                n.tween({
                    y: 635
                }, 1000).bind("TweenEnd", function() {
                    this.unbind("TweenEnd");
                    Crafty.e("Delay").delay(function() {
                        // open door when nurse arrives
                        d.animate("dOpening", 1);
                        n.pauseTweens();
                        Crafty.e("Delay").delay(function() {
                            // wait for door to open
                            n.resumeTweens();
                        }, 1200, 0);
                    }, 500, 0);
                    this.tween({
                        x: 520
                    }, 500).bind("TweenEnd", function() {
                        this.unbind("TweenEnd");
                        this.tween({
                            y: 400
                        }, 600).bind("TweenEnd", function() {
                            this.unbind("TweenEnd");
                            Crafty.e("Delay").delay(function() {
                                // attend patient
                                Crafty.e('2D, Canvas, Tween, good')
                                    .attr({
                                        x: 90,
                                        y: 200
                                    })
                                    // Show temperature icon above patient
                                    .tween({
                                        y: 150
                                    }, 200).bind("TweenEnd", function() {
                                        this.unbind("TweenEnd");
                                        this.tween({
                                            alpha: 1.0
                                        }, 2000);
                                        this.bind("TweenEnd", function() {
                                            this.tween({
                                                alpha: 0.0,
                                            }, 500);
                                        });
                                    });
                                n.pauseTweens();
                            }, 1000, 0);
                            this.tween({
                                x: 150
                            }, 1000).bind("TweenEnd", function() {
                                this.unbind("TweenEnd");
                                Crafty.e("Delay").delay(function() {
                                    // stop attending patient
                                    n.resumeTweens();
                                }, 1500, 0);
                                // returning
                                Crafty.e("Delay").delay(function() {
                                    // wait for door to close
                                    d.animate("dClosing", 1);
                                    n.pauseTweens();
                                }, 3100, 0);
                                this.tween({
                                    x: 520
                                }, 1000).bind("TweenEnd", function() {
                                    this.unbind("TweenEnd");
                                    Crafty.e("Delay").delay(function() {
                                        // stop attending patient
                                        n.resumeTweens();
                                    }, 1600, 0);
                                    this.tween({
                                        y: 635
                                    }, 600).bind("TweenEnd", function() {
                                        this.unbind("TweenEnd");
                                        this.tween({
                                            x: 745
                                        }, 500).bind("TweenEnd", function() {
                                            this.unbind("TweenEnd");
                                            this.tween({
                                                y: 270
                                            }, 1000);
                                        });
                                    });
                                });
                            });
                        });
                    });
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
                Crafty.e('2D, Canvas, Tween, speech')
                    .attr({
                        x: 90,
                        y: 200
                    })
                    // Show temperature icon above patient
                    .tween({
                        y: 150
                    }, 200).bind("TweenEnd", function() {
                        this.unbind("TweenEnd");
                        this.tween({
                            alpha: 1.0
                        }, 2000);
                        v.animate("listening", 1);
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
                Crafty.e('2D, Canvas, Tween, reading')
                    .attr({
                        x: 90,
                        y: 200
                    })
                    // Show temperature icon above patient
                    .tween({
                        y: 150
                    }, 200).bind("TweenEnd", function() {
                        this.unbind("TweenEnd");
                        this.tween({
                            alpha: 1.0
                        }, 2000);
                        b.animate("bedLightOn", 1);
                        s1.animate("music", 1);
                        s2.animate("music", 1);
                        this.bind("TweenEnd", function() {
                            this.tween({
                                alpha: 0.0,
                            }, 500);
                        });
                    });
            });

        // Medicine
        Crafty.e('2D, Canvas, Color, Mouse')
            .attr({
                x: 525,
                y: App.size.height - 110,
                w: 70,
                h: 70,
            })
            .color('rgb(255, 0, 0)')
            .bind('Click', function(MouseEvent) {
                Crafty.e('2D, Canvas, Tween, medicine')
                    .attr({
                        x: 711,
                        y: 150
                    })

                    .tween({
                        y: 130
                    }, 200).bind("TweenEnd", function() {
                        this.unbind("TweenEnd");
                        this.tween({
                            alpha: 1.0
                        }, 3000).bind("TweenEnd", function() {
                            this.tween({
                                alpha: 0.0
                            }, 500);
                        });
                    });
                Crafty.e("Delay").delay(function() {
                    n.tween({
                        y: 635
                    }, 1000).bind("TweenEnd", function() {
                        this.unbind("TweenEnd");
                        Crafty.e("Delay").delay(function() {
                            // open door when nurse arrives
                            d.animate("dOpening", 1);
                            n.pauseTweens();
                            Crafty.e("Delay").delay(function() {
                                // wait for door to open
                                n.resumeTweens();
                            }, 1200, 0);
                        }, 500, 0);
                        this.tween({
                            x: 520
                        }, 500).bind("TweenEnd", function() {
                            this.unbind("TweenEnd");
                            this.tween({
                                y: 400
                            }, 600).bind("TweenEnd", function() {
                                this.unbind("TweenEnd");
                                Crafty.e("Delay").delay(function() {
                                    // attend patient
                                    Crafty.e('2D, Canvas, Tween, good')
                                        .attr({
                                            x: 90,
                                            y: 200
                                        })
                                        // Show temperature icon above patient
                                        .tween({
                                            y: 150
                                        }, 200).bind("TweenEnd", function() {
                                            this.unbind("TweenEnd");
                                            this.tween({
                                                alpha: 1.0
                                            }, 2000);
                                            this.bind("TweenEnd", function() {
                                                this.tween({
                                                    alpha: 0.0,
                                                }, 500);
                                            });
                                        });
                                    n.pauseTweens();
                                }, 1000, 0);
                                this.tween({
                                    x: 150
                                }, 1000).bind("TweenEnd", function() {
                                    this.unbind("TweenEnd");
                                    Crafty.e("Delay").delay(function() {
                                        // stop attending patient
                                        n.resumeTweens();
                                    }, 1500, 0);
                                    // returning
                                    Crafty.e("Delay").delay(function() {
                                        // wait for door to close
                                        d.animate("dClosing", 1);
                                        n.pauseTweens();
                                    }, 3100, 0);
                                    this.tween({
                                        x: 520
                                    }, 1000).bind("TweenEnd", function() {
                                        this.unbind("TweenEnd");
                                        Crafty.e("Delay").delay(function() {
                                            // stop attending patient
                                            n.resumeTweens();
                                        }, 1600, 0);
                                        this.tween({
                                            y: 635
                                        }, 600).bind("TweenEnd", function() {
                                            this.unbind("TweenEnd");
                                            this.tween({
                                                x: 745
                                            }, 500).bind("TweenEnd", function() {
                                                this.unbind("TweenEnd");
                                                this.tween({
                                                    y: 270
                                                }, 1000);
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                }, 2000, 0);
            });

        // x = 525, 620
    },

    start: function() {
        Crafty.init(App.size.width, App.size.height, document.getElementById('app'));

        App.load_sprites();
        App.build_room();
        App.build_buttons();
    }
}
