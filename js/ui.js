(function() {
	const getInfoOn = (object) => {
		switch(object) {
		case "bed":
			return "The bed is electric and contains a temperature regulating mattress to ensure the patient remains at a comfortable temperature."
		case "voice-assistant":
			return "The patient is able to ask questions, alter their room conditions, or call for the nurse with specific requests."
		case "ac":
			return "Air-conditioning is available to regulate room temperature based on the patient's temperature."
		case "window":
			return "The automatic windows open and close to ensure fresh air enters the room and maintain temperature levels. Also, the blinds automatically open and close."
		case "dashboard":
			return "All results from the sensors connected to the patient are linked to a dashboard and displayed clearly. The dashboard will alert a nurse if patient levels become abnormal. This makes it easier for nurses to manage their patients. A TV is shown on the patient's side for their entertainment."
		case "speaker":
			return "Appropriate music is played when the patient is reading or sleeping to aid in these activities."
		case "nurse":
			return "The nurse is able to manage all their patients in one place from the dashboard."
		}
	}

	window.showInfoOn = (object) => {
		const title = object
			  .split("-")
			  .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
			  .join(" ")
		const textBox = document.querySelector("#textBox")
		textBox.style = ""
		textBox.innerHTML = `
<h1>${title}</h1>
<p class="content">${getInfoOn(object)}</p>
`
	}

	function getCaption(action) {
		switch(action) {
		case "temp":
			return "The patient's temperature is irregular. The air-conditioning is turned on to adjust the room temperature. Also, the windows may be opened. The bed heaters may be adjusted too."
		case "sleep":
			return "To aid in sleeping, the blinds are closed and the lights switched off. Furthermore, soothing music is played."
		case "heart":
			return "If the patient enters a dangerous state, the data fed into the patient dashboard is updated which alerts a nurse to attend the patient."
		case "speech":
			return "The patient can make commands and call for the nurse using the voice assistant."
		case "reading":
			return "When reading, a light above the patient is switched on and a reading music soundtrack is played."
		case "medicine":
			return "The patient dashboard monitors patient levels and automatically regulates medicine intake. If the medicine needs to be given by a nurse, they are alerted."
		}
	}

	const captionThis = (action) => {
		const caption = document.querySelector("#caption")
		caption.style = ""
		caption.innerHTML = `<p>${getCaption(action)}</p>`
	}

	window.buildButtons = (components) => {
		// Temperature
		Crafty.e('2D, Canvas, tempButton, Mouse')
			.attr({
				x: 46,
				y: App.size.height - 64
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
					}, 200)
					.one("TweenEnd", function() {
						this.tween({
							alpha: 1.0
						}, 2000);
						components.airConditioning.animate("blowing", 1);
						components.window.animate("wOpening", 1);
						this.one("TweenEnd", function() {
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
				y: App.size.height - 64
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
					}, 200)
					.one("TweenEnd", function() {
						this.tween({
							alpha: 1.0
						}, 2000);
						components.bed.animate("bedLightOff", 1);
						components.window.animate("wClosing", 1);
						components.speaker1.animate("music", 1);
						components.speaker2.animate("music", 1);
						this.one("TweenEnd", function() {
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
				y: App.size.height - 64
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
					}, 200)
					.one("TweenEnd", function() {
						this.tween({
							alpha: 1.0
						}, 2000);
						this.one("TweenEnd", function() {
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
					}, 200)
					.one("TweenEnd", function() {
						components.TV.animate("dashboardAlert", 4);
						this.tween({
							alpha: 1.0
						}, 3000).one("TweenEnd", function() {
							this.tween({
								alpha: 0.0
							}, 500);
						});
					});

				Crafty.e("Delay").delay(function() {
					components.nurse.tween({
						y: 635
					}, 1000).one("TweenEnd", function() {
						Crafty.e("Delay").delay(function() {
							// open door when nurse arrives
							components.door.animate("dOpening", 1);
							components.nurse.pauseTweens();
							Crafty.e("Delay").delay(function() {
								// wait for door to open
								components.nurse.resumeTweens();
							}, 1200, 0);
						}, 500, 0);
						this.tween({
							x: 520
						}, 500).one("TweenEnd", function() {
							this.tween({
								y: 400
							}, 600).one("TweenEnd", function() {
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
										}, 200).one("TweenEnd", function() {
											components.TV.sprite("tDOff");
											this.tween({
												alpha: 1.0
											}, 2000);
											this.one("TweenEnd", function() {
												this.tween({
													alpha: 0.0,
												}, 500);
											});
										});
									components.nurse.pauseTweens();
								}, 1000, 0);
								this.tween({
									x: 150
								}, 1000).one("TweenEnd", function() {
									Crafty.e("Delay").delay(function() {
										// stop attending patient
										components.nurse.resumeTweens();
									}, 1500, 0);
									// returning
									Crafty.e("Delay").delay(function() {
										// wait for door to close
										components.door.animate("dClosing", 1);
										components.nurse.pauseTweens();
									}, 3100, 0);
									this.tween({
										x: 520
									}, 1000).one("TweenEnd", function() {
										Crafty.e("Delay").delay(function() {
											// stop attending patient
											components.nurse.resumeTweens();
										}, 1600, 0);
										this.tween({
											y: 635
										}, 600).one("TweenEnd", function() {
											this.tween({
												x: 745
											}, 500).one("TweenEnd", function() {
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
				y: App.size.height - 64
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
					}, 200).one("TweenEnd", function() {
						this.tween({
							alpha: 1.0
						}, 2000);
						components.voiceAssistant.animate("listening", 1);
						this.one("TweenEnd", function() {
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
				y: App.size.height - 64
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
					}, 200).one("TweenEnd", function() {
						this.tween({
							alpha: 1.0
						}, 2000);
						components.bed.animate("bedLightOn", 1);
						components.speaker1.animate("music", 1);
						components.speaker2.animate("music", 1);
						this.one("TweenEnd", function() {
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
				y: App.size.height - 64
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
						components.TV.animate("dashboardAlert", 4);
						this.tween({
							alpha: 1.0
						}, 3000).bind("TweenEnd", function() {
							this.tween({
								alpha: 0.0
							}, 500);
						});
					});
				Crafty.e("Delay").delay(function() {
					components.nurse.tween({
						y: 635
					}, 1000).one("TweenEnd", function() {
						Crafty.e("Delay").delay(function() {
							// open door when nurse arrives
							components.door.animate("dOpening", 1);
							components.nurse.pauseTweens();
							Crafty.e("Delay").delay(function() {
								// wait for door to open
								components.nurse.resumeTweens();
							}, 1200, 0);
						}, 500, 0);
						this.tween({
							x: 520
						}, 500).one("TweenEnd", function() {
							this.tween({
								y: 400
							}, 600).one("TweenEnd", function() {
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
										}, 200).one("TweenEnd", function() {
											components.TV.sprite("tDOff");
											this.tween({
												alpha: 1.0
											}, 2000);
											this.one("TweenEnd", function() {
												this.tween({
													alpha: 0.0,
												}, 500);
											});
										});
									components.nurse.pauseTweens();
								}, 1000, 0);
								this.tween({
									x: 150
								}, 1000).one("TweenEnd", function() {
									Crafty.e("Delay").delay(function() {
										// stop attending patient
										components.nurse.resumeTweens();
									}, 1500, 0);
									// returning
									Crafty.e("Delay").delay(function() {
										// wait for door to close
										components.door.animate("dClosing", 1);
										components.nurse.pauseTweens();
									}, 3100, 0);
									this.tween({
										x: 520
									}, 1000).one("TweenEnd", function() {
										Crafty.e("Delay").delay(function() {
											// stop attending patient
											components.nurse.resumeTweens();
										}, 1600, 0);
										this.tween({
											y: 635
										}, 600).one("TweenEnd", function() {
											this.tween({
												x: 745
											}, 500).one("TweenEnd", function() {
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
	}
}())
