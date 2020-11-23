input.onButtonPressed(Button.A, function () {
    menu += 1
    if (온도계 == 1) {
        basic.showString("방식: 1은 겨울철 온도계고 2는 여름철 온도계다")
        온도방식 += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (menu == 1) {
        basic.showString("1")
        basic.pause(1000)
        basic.showString("Hello!")
    } else {
        if (menu == 2) {
            basic.showNumber(2)
            basic.showString("나침반")
            basic.pause(1000)
            나침반 = 1
        } else {
            if (menu == 3) {
                basic.showString("3")
                basic.showString("온도계")
                basic.pause(1000)
                온도계 = 1
            } else {
                if (menu == 4) {
                    basic.showString("4")
                    basic.showString("빛감지")
                    빛 = 1
                } else {
                    if (menu == 5) {
                        basic.showString("5")
                        basic.showString("주사위")
                        주사위 = 1
                    } else {
                        if (menu == 6) {
                            basic.showString("6")
                            basic.showString("만보기")
                            만보기 = 1
                        } else {
                            if (menu == 7) {
                                basic.showString("7")
                            } else {
                                if (menu == 8) {
                                    basic.showString("8")
                                } else {
                                    if (menu == 9) {
                                        basic.showString("9")
                                    } else {
                                        if (menu == 10) {
                                            basic.showString("10")
                                        } else {
                                            if (menu == 11) {
                                                basic.showString("11")
                                            } else {
                                                if (menu == 12) {
                                                    basic.showString("12")
                                                } else {
                                                    if (menu == 13) {
                                                        basic.showString("13")
                                                    } else {
                                                        if (menu == 14) {
                                                            basic.showString("14")
                                                        } else {
                                                            if (menu == 15) {
                                                                basic.showString("15")
                                                            } else {
                                                                if (menu == 16) {
                                                                    basic.showString("16")
                                                                } else {
                                                                    if (menu == 17) {
                                                                        basic.showString("17")
                                                                    } else {
                                                                        if (menu > "18") {
                                                                            menu = 1
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
let 주사위_수 = 0
let 만보기step = 0
let 만보기 = 0
let 주사위 = 0
let 빛 = 0
let 온도방식 = 0
let 온도계 = 0
let menu = 0
let 나침반 = 0
basic.showString("SMOO LAUNCHER!")
나침반 = 0
menu = 1
basic.forever(function () {
    if (만보기 == 1) {
        if (input.acceleration(Dimension.Strength) > 1500) {
            만보기step += 1
            basic.showNumber(만보기step)
        }
    } else {
        if (만보기 > 2) {
            만보기 = 0
        }
    }
})
basic.forever(function () {
    if (주사위 == 1) {
        주사위_수 = randint(1, 6)
        basic.showString("" + (주사위_수))
    } else {
        if (주사위 > 2) {
            주사위 = 0
        }
    }
})
basic.forever(function () {
    if (빛 == 1) {
        basic.showString("" + (input.lightLevel()))
    } else {
        if (빛 > 2) {
            빛 = 1
        }
    }
})
basic.forever(function () {
    if (나침반 == 1) {
        basic.pause(200)
        if (input.compassHeading() > 315 || input.compassHeading() < 45) {
            basic.showArrow(ArrowNames.North)
        } else {
            if (input.compassHeading() > 45 || input.compassHeading() < 315) {
                basic.showArrow(ArrowNames.West)
            } else {
                if (input.compassHeading() > 315 || input.compassHeading() < 225) {
                    basic.showArrow(ArrowNames.South)
                } else {
                    if (input.compassHeading() > 225 || input.compassHeading() < 315) {
                        basic.showArrow(ArrowNames.East)
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (온도방식 == 1) {
        if (input.temperature() < 18 && input.temperature() > 26) {
            basic.showString("적절")
        } else {
            if (input.temperature() > 27) {
                basic.showString("온도높음")
            } else {
                if (input.temperature() < 17) {
                    basic.showString("온도낮음")
                }
            }
        }
    } else {
        if (온도방식 == 2) {
            if (input.temperature() < 21 && input.temperature() > 28) {
                basic.showString("적절")
            } else {
                if (input.temperature() > 29) {
                    basic.showString("온도높음")
                } else {
                    if (input.compassHeading() < 18) {
                        basic.showString("온도낮음")
                    }
                }
            }
        } else {
            if (온도방식 < 3) {
                온도방식 = 0
            }
        }
    }
})
