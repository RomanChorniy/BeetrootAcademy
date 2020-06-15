import * as $ from 'jquery';

const textForChecklist = [
    {
        step: 7,
        text__head: 'choose',
        text__subHead: 'Your destination',
        text__description: 'Start by selecting the destination you want to visit.'
    },
    {
        step: 6,
        text__head: 'choose',
        text__subHead: 'Your Arrival Date',
        text__description: 'Pick your desired arrival date.'
    },
    {
        step: 5,
        text__head: 'choose',
        text__subHead: 'Your Return Date',
        text__description: 'Pick your desired return date.'
    },
    {
        step: 4,
        text__head: 'search',
        text__subHead: 'For Your Preferences',
        text__description: 'Browse through a selection of travel plans and itineraries.'
    },
    {
        step: 3,
        text__head: 'select',
        text__subHead: 'Travel Plan',
        text__description: 'Pick & choose the travel plan that amazes you.'
    },
    {
        step: 2,
        text__head: 'confirm',
        text__subHead: 'Your Travel Plan',
        text__description: 'Or customize every detail.'
    },
    {
        step: 1,
        text__head: 'complete',
        text__subHead: 'Your Booking',
        text__description: 'All your reservations in one place.'
    }
]
let i = 0;
$('.btnBox__btnDown').click(() => {
    console.log(i);
    if (textForChecklist[i]) {
        i++;
        $('.text__head').html(textForChecklist[i].text__head);
        $('.text__subHead').html(textForChecklist[i].text__subHead);
        $('.text__description').html(textForChecklist[i].text__description);
        $('.tablo__number').html('0' + textForChecklist[i].step);
        if (i == 0) {
            $('.btnBox__btnUp').attr('disabled', true);
            $('.controlPanel__btnUp').css('border', '2px solid #969384');
        }
        else {
            $('.btnBox__btnUp').removeAttr('disabled');
            $('.controlPanel__btnUp').css('border', '2px solid #000');
        }
        if (i == 6) {
            $('.btnBox__btnDown').attr('disabled', true);
            $('.controlPanel__btnDown').css('border', '2px solid #969384');
        }
        else {
            $('.btnBox__btnDown').removeAttr('disabled');
            $('.controlPanel__btnDown').css('border', '2px solid #000');
        }
    }
})
$('.btnBox__btnUp').click(() => {
    console.log(i);
    if (textForChecklist[i] || --i) {
        i--;
        $('.text__head').html(textForChecklist[i].text__head);
        $('.text__subHead').html(textForChecklist[i].text__subHead);
        $('.text__description').html(textForChecklist[i].text__description);
        $('.tablo__number').html('0' + textForChecklist[i].step);
        if (i == 0) {
            $('.btnBox__btnUp').attr('disabled', true);
            $('.controlPanel__btnUp').css('border', '2px solid #969384');
        }
        else {
            $('.btnBox__btnUp').removeAttr('disabled');
            $('.controlPanel__btnUp').css('border', '2px solid #000');
        }
        if (i == 6) {
            $('.btnBox__btnDown').attr('disabled', true);
            $('.controlPanel__btnDown').css('border', '2px solid #969384');
        }
        else {
            $('.btnBox__btnDown').removeAttr('disabled');
            $('.controlPanel__btnDown').css('border', '2px solid #000');
        }
    }
});

