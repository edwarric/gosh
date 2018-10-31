var a, b, d, n, s1, s2, t, w, v;
// a/c, bed, door, nurse, speaker1, speaker 2, tv/dashboard, window,
// voice-assistant

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
        // Load buttons
        Crafty.sprite("pics/buttons/book-button.png", {
            bookButton: [0, 0, 78, 78]
        });
        Crafty.sprite("pics/buttons/heart-button.png", {
            heartButton: [0, 0, 78, 78]
        });
        Crafty.sprite("pics/buttons/medicine-button.png", {
            medicineButton: [0, 0, 78, 78]
        });
        Crafty.sprite("pics/buttons/sleep-button.png", {
            sleepButton: [0, 0, 78, 78]
        });
        Crafty.sprite("pics/buttons/speech-button.png", {
            speechButton: [0, 0, 78, 78]
        });
        Crafty.sprite("pics/buttons/temp-button.png", {
            tempButton: [0, 0, 78, 78]
        });

        // Load icons
        Crafty.sprite("pics/icons/alert.png", {
            alert: [0, 0, 128, 128]
        });
        Crafty.sprite("pics/icons/book.png", {
            reading: [0, 0, 128, 128]
        });
        Crafty.sprite("pics/icons/good.png", {
            good: [0, 0, 128, 128]
        });
        Crafty.sprite("pics/icons/heart.png", {
            heart: [0, 0, 128, 128]
        });
        Crafty.sprite("pics/icons/medicine.png", {
            medicine: [0, 0, 128, 128]
        });
        Crafty.sprite("pics/icons/sleep.png", {
            sleep: [0, 0, 128, 128]
        });
        Crafty.sprite("pics/icons/speech.png", {
            speech: [0, 0, 128, 128]
        });
        Crafty.sprite("pics/icons/temp.png", {
            temp: [0, 0, 128, 128]
        });

        // Load pictures
        Crafty.sprite("pics/img/button-bg.png", {
            buttonBg: [0, 0, 645, 150]
        });
        Crafty.sprite("pics/img/chair.png", {
            chair: [0, 0, 60, 60]
        });
        Crafty.sprite("pics/img/desk.png", {
            desk: [0, 0, 60, 60]
        });
        Crafty.sprite("pics/img/hallway-side.png", {
            hallwaySide: [0, 0, 700, 150]
        });
        Crafty.sprite("pics/img/hallway-up.png", {
            hallwayUp: [0, 0, 150, 750]
        });
        Crafty.sprite("pics/img/nurse.png", {
            nurse: [0, 0, 60, 60]
        });
        Crafty.sprite("pics/img/wall.png", {
            wall: [0, 0, 700, 600]
        });

        // Sprite animations
        var ac = {
            "sprites": {
                "pics/animations/ac.png": {
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
                "pics/animations/bed.png": {
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
                "pics/animations/doors.png": {
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
                "pics/animations/speakers.png": {
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
        var tvDashboard = {
            "sprites": {
                "pics/animations/tv-dashboard.png": {
                    tile: 60,
                    tileh: 300,
                    map: {
                        tDOff: [0, 0],
                        tDOn: [0, 1]
                    }
                }
            }
        };
        var windows = {
            "sprites": {
                "pics/animations/windows.png": {
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
                "pics/animations/vc.png": {
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
        Crafty.load(tvDashboard);
        Crafty.load(windows);
        Crafty.load(vc);
    },

    build_room() {
        // button background
        Crafty.e('2D, Canvas, buttonBg')
            .attr({
                x: 0,
                y: App.size.height - 150
            });

        // Hallways
        Crafty.e('2D, Canvas, hallwaySide')
            .attr({
                x: 0,
                y: App.room.height
            });
        Crafty.e('2D, Canvas, hallwayUp')
            .attr({
                x: App.room.width,
                y: 0
            });

        // Room walls
        Crafty.e('2D, Canvas, Color, wall')
            .attr({
                x: 0,
                y: 0
            })

        // Bed
        b = Crafty.e('2D, Canvas, Mouse, bedOff, SpriteAnimation')
            .attr({
                x: 20,
                y: this.room.height / 2 - 65
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('bed');
            });
        b.reel("bedLightOn", 2000, [
            [0, 1]
        ]);
        b.reel("bedLightOff", 2000, [
            [0, 0]
        ]);

        // Desk
        Crafty.e('2D, Canvas, desk')
            .attr({
                x: 25,
                y: 165   // 10 out from bed
            });

        // Desk with voice-assistant
        v = Crafty.e('2D, Canvas, vOff, Mouse, SpriteAnimation')
            .attr({
                x: 25,
                y: 375   // 10 out from bed
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('voice-assistant');
            });
        v.reel("listening", 6000, [
            [0, 1],
            [0, 0]
        ]);

        // A/C
        a = Crafty.e('2D, Canvas, acOff, Mouse, SpriteAnimation')
            .attr({
                x: 20,
                y: 490
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

        // Window
        w = Crafty.e('2D, Canvas, w0, Mouse, SpriteAnimation')
            .attr({
                x: 50,
                y: 0
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('window');
            });
        w.reel("wClosing", 2000, [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6]
        ]);
        w.reel("wOpening", 1000, [
            [0, 0],
            [0, 7]
        ]);

        // Chairs
        Crafty.e('2D, Canvas, chair')
            .attr({
                x: 200,
                y: 70
            });
        Crafty.e('2D, Canvas, chair')
            .attr({
                x: 360,
                y: 70
            });

        // TV/Dashboard
        t = Crafty.e('2D, Canvas, tDOff, Mouse, SpriteAnimation, Sprite')
            .attr({
                x: 660,
                y: this.room.height / 2 - 150
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('dashboard');
            });
        t.reel("dashboardAlert", 500, [
            [0, 0],
            [0, 1]
        ]);

        // Door
        d = Crafty.e('2D, Canvas, dClosed, SpriteAnimation')
            .attr({
                x: 500,
                y: 480
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

        // Speakers
        s1 = Crafty.e('2D, Canvas, sOff, Mouse, SpriteAnimation')
            .attr({
                x: 620,
                y: 60
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
        s2 = Crafty.e('2D, Canvas, sOff, Mouse, SpriteAnimation')
            .attr({
                x: 620,
                y: 470
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

        // Nurse
        n = Crafty.e('2D, Canvas, nurse, Mouse, Tween')
            .attr({
                x: App.room.width + 45,
                y: App.room.height / 2 - 30
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('nurse');
            });

    },

    build_buttons() {
        // Temperature
        Crafty.e('2D, Canvas, tempButton, Mouse')
            .attr({
                x: 46,
                y: App.size.height - 114
            })
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
                        w.animate("wOpening", 1);
                        this.bind("TweenEnd", function() {
                            this.tween({
                                alpha: 0.0,
                            }, 500);
                        });
                    });
            });

        // Sleeping
        Crafty.e('2D, Canvas, sleepButton, Mouse')
            .attr({
                x: 141,
                y: App.size.height - 114
            })
            .bind('Click', function(MouseEvent) {
                captionThis('sleep');
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
                        w.animate("wClosing", 1);
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
        Crafty.e('2D, Canvas, heartButton, Mouse')
            .attr({
                x: 236,
                y: App.size.height - 114
            })
            .bind('Click', function(MouseEvent) {
                captionThis('heart');
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
                Crafty.e('2D, Canvas, Tween, alert')
                    .attr({
                        x: 711,
                        y: 150
                    })
                    .tween({
                        y: 130
                    }, 200).bind("TweenEnd", function() {
                        this.unbind("TweenEnd");
                        t.animate("dashboardAlert", 4);
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
                                            t.sprite("tDOff");
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

        // Voice assistant
        Crafty.e('2D, Canvas, speechButton, Mouse')
            .attr({
                x: 331,
                y: App.size.height - 114
            })
            .bind('Click', function(MouseEvent) {
                captionThis('speech');
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
        Crafty.e('2D, Canvas, bookButton, Mouse')
            .attr({
                x: 426,
                y: App.size.height - 114
            })
            .bind('Click', function(MouseEvent) {
                captionThis('reading');
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
        Crafty.e('2D, Canvas, medicineButton, Mouse')
            .attr({
                x: 521,
                y: App.size.height - 114
            })
            .bind('Click', function(MouseEvent) {
                captionThis('medicine');
                Crafty.e('2D, Canvas, Tween, medicine')
                    .attr({
                        x: 711,
                        y: 150
                    })

                    .tween({
                        y: 130
                    }, 200).bind("TweenEnd", function() {
                        this.unbind("TweenEnd");
                        t.animate("dashboardAlert", 4);
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
                                            t.sprite("tDOff");
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
    },

    start: function() {
        Crafty.init(App.size.width, App.size.height, document.getElementById('app'));

        App.load_sprites();
        App.build_room();
        App.build_buttons();
    }
}
