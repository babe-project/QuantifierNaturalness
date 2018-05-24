// customize the experiment by specifying a view order and a trial structure
exp.customize = function() {

    // record current date and time in global_data
    this.global_data.startDate = Date();
    this.global_data.startTime = Date.now();

    // choose randomly between slider and forced response type
    this.responseType = _.sample(["slider", "forced"])

    if (this.responseType === "slider") {
        // specify view order for slider type response
        this.views_seq = [intro,
                          instructionsSliderRating,
                          practiceSliderRating,
                          beginMainExp,
                          mainSliderRating,
                          postTest,
                          thanks];
    } else {
        // specify view order for forced type response
        this.views_seq = [intro,
                          instructionsForcedChoice,
                          practiceForcedChoice,
                          beginMainExp,
                          mainForcedChoice,
                          postTest,
                          thanks];
    }

    // adds progress bars to the views listed
    // view's name coincides with object's name
    this.progress_bar_in = ['mainForcedChoice', 'mainSliderRating'];
    // styles: chunks, separate or default
    this.progress_bar_style = 'default';
    // the width of the progress bar or a single chunk
    this.progress_bar_width = 60;
};
