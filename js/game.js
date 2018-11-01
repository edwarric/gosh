window.components = {}

window.App = {
    size: {
        width: 850,
        height: 900,
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
        const assets = {
            "sprites": {
                "pics/animations/ac.png": {
                    tile: 90,
                    tileh: 80,
                    map: {
                        acOff: [0, 0],
                        acOn1: [0, 1],
                        acOn2: [0, 2]
                    }
                },
                "pics/animations/bed.png": {
                    tile: 285,
                    tileh: 130,
                    map: {
                        bedOff: [0, 0],
                        bedOn: [0, 1]
                    }
                },
                "pics/animations/doors.png": {
                    tile: 120,
                    tileh: 120,
                    map: {
                        dClosed: [0, 0],
                        dHalf: [0, 1],
                        dOpen: [0, 2]
                    }
                },
                "pics/animations/speakers.png": {
                    tile: 60,
                    tileh: 70,
                    map: {
                        sOff: [0, 0],
                        s0: [0, 1],
                        s1: [0, 2]
                    }
                },
                "pics/animations/tv-dashboard.png": {
                    tile: 60,
                    tileh: 300,
                    map: {
                        tDOff: [0, 0],
                        tDOn: [0, 1]
                    }
                },
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
                },
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
        Crafty.load(assets);
    },

    build_room() {
        // button background
        Crafty.e('2D, Canvas, buttonBg')
            .attr({
                x: 0,
                y: App.size.height - 100
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
        components.bed = Crafty.e('2D, Canvas, Mouse, bedOff, SpriteAnimation')
            .attr({
                x: 20,
                y: this.room.height / 2 - 65
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('bed');
            });
        components.bed.reel("bedLightOn", 2000, [
            [0, 1]
        ]);
        components.bed.reel("bedLightOff", 2000, [
            [0, 0]
        ]);

        // Desk
        Crafty.e('2D, Canvas, desk')
            .attr({
                x: 25,
                y: 165   // 10 out from bed
            });

        // Desk with voice-assistant
        components.voiceAssistant = Crafty.e('2D, Canvas, vOff, Mouse, SpriteAnimation')
            .attr({
                x: 25,
                y: 375   // 10 out from bed
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('voice-assistant');
            });
        components.voiceAssistant.reel("listening", 6000, [
            [0, 1],
            [0, 0]
        ]);

        // A/C
        components.airConditioning = Crafty.e('2D, Canvas, acOff, Mouse, SpriteAnimation')
            .attr({
                x: 20,
                y: 490
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('ac');
            });
        components.airConditioning.reel("blowing", 2000, [
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
        components.window = Crafty.e('2D, Canvas, w0, Mouse, SpriteAnimation')
            .attr({
                x: 50,
                y: 0
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('window');
            });
        components.window.reel("wClosing", 2000, [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6]
        ]);
        components.window.reel("wOpening", 1000, [
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
        components.TV = Crafty.e('2D, Canvas, tDOff, Mouse, SpriteAnimation, Sprite')
            .attr({
                x: 660,
                y: this.room.height / 2 - 150
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('dashboard');
            });
        components.TV.reel("dashboardAlert", 500, [
            [0, 0],
            [0, 1]
        ]);

        // Door
        components.door = Crafty.e('2D, Canvas, dClosed, SpriteAnimation')
            .attr({
                x: 500,
                y: 480
            });
        components.door.reel("dOpening", 1000, [
            [0, 0],
            [0, 1],
            [0, 2]
        ]);
        components.door.reel("dClosing", 1000, [
            [0, 2],
            [0, 1],
            [0, 0]
        ]);

        // Speakers
        components.speaker1 = Crafty.e('2D, Canvas, sOff, Mouse, SpriteAnimation')
            .attr({
                x: 620,
                y: 60
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('speaker');
            });
        components.speaker1.reel("music", 2000, [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 0]
        ]);
        components.speaker2 = Crafty.e('2D, Canvas, sOff, Mouse, SpriteAnimation')
            .attr({
                x: 620,
                y: 470
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('speaker');
            });
        components.speaker2.reel("music", 2000, [
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
        components.nurse = Crafty.e('2D, Canvas, nurse, Mouse, Tween')
            .attr({
                x: App.room.width + 45,
                y: App.room.height / 2 - 30
            })
            .bind('Click', function(MouseEvent) {
                showInfoOn('nurse');
            });

    },

    start: function() {
        Crafty.init(App.size.width, App.size.height, document.getElementById('app'));
        Crafty.viewport.scale(0.7)

        App.load_sprites();
        App.build_room();
        window.buildButtons(window.components)
    }
}
