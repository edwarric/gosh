App = {
  size: {
    width: 850,
    height: 900,
  },
  room: {
    width: 700,
    height: 600,
  },
  button: {
    width: 50,
    height: 50,
  },

  build_room() {
    // Load images
    // Crafty.sprite("file-csv.png", {pic:[0,0,384,512]});
    // Assign and insert images
    // var pic = Crafty.e("2D, Canvas, pic");

    // Load images
    Crafty.sprite("bed.png", {
      pic: [0, 0, 280, 130]
    });

    // hospital room
    Crafty.e('2D, Canvas, Color')
      .attr({
        x: 0,
        y: 0,
        w: App.room.width,
        h: App.room.height,
      })
      .color('rgb(0, 255, 255)');

    // hallway1
    Crafty.e('2D, Canvas, Color')
      .attr({
        x: 0,
        y: App.room.height,
        w: App.room.width,
        h: 150,
      })
      .color('rgb(0, 255, 0)');

    // hallway2
    Crafty.e('2D, Canvas, Color')
      .attr({
        x: App.room.width,
        y: 0,
        w: 150,
        h: 750,
      })
      .color('rgb(0, 255, 0)');

    // bed
    Crafty.e('2D, Canvas, Mouse, pic')
      .attr({
        x: 0,
        y: this.room.height / 2 - 65,
        w: 280,
        h: 130,
      })
      .bind('Click', function(MouseEvent) {
        showInfoOn('bed');
        //document.getElementById('bed').style.display = 'block';
      });

    // desk
    Crafty.e('2D, Canvas, Color')
      .attr({
        x: 0,
        y: 165, // 10 out from bed
        w: 60,
        h: 60,
      })
      .color('rgb(255, 0, 0)');

    // desk with voice assistant
    Crafty.e('2D, Canvas, Color, Mouse')
      .attr({
        x: 0,
        y: 375, // 10 out from bed
        w: 60,
        h: 60,
      })
      .color('rgb(255, 0, 0)')
      .bind('Click', function(MouseEvent) {
        showInfoOn('voice-assistant');
      });

    // a/c
    Crafty.e('2D, Canvas, Color, Mouse')
      .attr({
        x: 0,
        y: 510,
        w: 30,
        h: 80,
      })
      .color('rgb(255, 0, 0)')
      .bind('Click', function(MouseEvent) {
        showInfoOn('ac');
      });

    // window
    Crafty.e('2D, Canvas, Color, Mouse')
      .attr({
        x: 50,
        y: 0,
        w: 600,
        h: 20,
      })
      .color('rgb(255, 0, 0)')
      .bind('Click', function(MouseEvent) {
        showInfoOn('window');
      });

    // chair
    Crafty.e('2D, Canvas, Color')
      .attr({
        x: 200,
        y: 50,
        w: 60,
        h: 60,
      })
      .color('rgb(255, 0, 0)');

    // chair
    Crafty.e('2D, Canvas, Color')
      .attr({
        x: 360,
        y: 50,
        w: 60,
        h: 60,
      })
      .color('rgb(255, 0, 0)');

    // TV/dashboard
    Crafty.e('2D, Canvas, Color, Mouse')
      .attr({
        x: 680,
        y: this.room.height / 2 - 150,
        w: 40,
        h: 300,
      })
      .color('rgb(255, 0, 0)')
      .bind('Click', function(MouseEvent) {
        showInfoOn('dashboard');
      });

    // doorway
    Crafty.e('2D, Canvas, Color')
      .attr({
        x: 500,
        y: 480,
        w: 120,
        h: 120,
      })
      .color('rgb(255, 0, 0)');

    // speaker1
    Crafty.e('2D, Canvas, Color, Mouse')
      .attr({
        x: 680,
        y: 70,
        w: 20,
        h: 50,
      })
      .color('rgb(255, 0, 0)')
      .bind('Click', function(MouseEvent) {
        showInfoOn('speaker');
      });

    // speaker1
    Crafty.e('2D, Canvas, Color, Mouse')
      .attr({
        x: 680,
        y: 480,
        w: 20,
        h: 50,
      })
      .color('rgb(255, 0, 0)')
      .bind('Click', function(MouseEvent) {
        showInfoOn('speaker');
      });

    // nurse
    Crafty.e('2D, Canvas, Color, Mouse')
      .attr({
        x: App.room.width + 55,
        y: App.room.height / 2 - 30,
        w: 60,
        h: 60,
      })
      .color('rgb(255, 0, 0)')
      .bind('Click', function(MouseEvent) {
        showInfoOn('nurse');
      });

  },

  build_buttons() {
    // Temperature
    Crafty.e('2D, Canvas, Color, Mouse')
      .attr({
        x: 50,
        y: 790,
        w: 70,
        h: 70,
      })
      .color('rgb(255, 0, 0)')
      .bind('Click', function(MouseEvent) {
        // Show temperature icon above patient
        var a = Crafty.e('2D, Canvas, Color, Tween')
          .attr({
            x: 50,
            y: 200,
            w: 50,
            h: 50,
          })
          // Show temperature icon above patient
          .color('#00ff00')
          .tween({
            alpha: 0.0,
            x: 100,
            y: 100
          }, 1000)
        // Show A/C is turned on
        // replace a/c with ON version
        // show waves coming out a/c
        // Caption the event: show text
      });

    Crafty.e('2D, Canvas, Color')
      .attr({
        x: 145,
        y: 790,
        w: 70,
        h: 70,
      })
      .color('rgb(255, 0, 0)');

    Crafty.e('2D, Canvas, Color')
      .attr({
        x: 240,
        y: 790,
        w: 70,
        h: 70,
      })
      .color('rgb(255, 0, 0)');

    Crafty.e('2D, Canvas, Color')
      .attr({
        x: 335,
        y: 790,
        w: 70,
        h: 70,
      })
      .color('rgb(255, 0, 0)');

    Crafty.e('2D, Canvas, Color')
      .attr({
        x: 430,
        y: 790,
        w: 70,
        h: 70,
      })
      .color('rgb(255, 0, 0)');

    Crafty.e('2D, Canvas, Color')
      .attr({
        x: 525,
        y: 790,
        w: 70,
        h: 70,
      })
      .color('rgb(255, 0, 0)');
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
    Crafty.background('rgb(0, 255, 255)');

    App.build_room();
    App.build_buttons();


  }
}

// 384 512
