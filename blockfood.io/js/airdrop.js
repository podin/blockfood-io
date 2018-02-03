window.init_page = function ($) {
    // hash utility functions

    var updateHash = function (key, newValue) {
        var hash = (window.location.href.split("#")[1] || "")
        var keyFound = false
        var updatedHash = hash.split('&').reduce(function (hash, value, i) {
            var currentKey = value.split('=')[0]
            var currentValue = value.split('=')[1]

            if (currentKey === key) {
                keyFound = true
            }
            return hash + (i !== 0 ? '&' : '') + currentKey + '=' + (currentKey === key ? newValue : currentValue)
        }, '')

        if (!keyFound) {
            updatedHash = updatedHash + (updatedHash.length > 0 ? '&' : '') + key + '=' + newValue
        }

        window.location.hash = updatedHash
    }

    var getValueFromHash = function (key) {
        var hash = (window.location.href.split("#")[1] || "")
        var values = hash.split('&').reduce(function (values, value) {
            values[value.split('=')[0]] = value.split('=')[1]
            return values
        }, {})

        return values[key]
    }


    var rewards = {
        confirmedActions: 500,
        '1LevelReward': 100,
        '2LevelReward': 25,
        '3LevelReward': 12,
        '4LevelReward': 6,
    }

    Object.keys(rewards).forEach(function (key) {
        $('code.' + key).text(rewards[key])
    })

    var step1 = function () {
        var privateId = getValueFromHash('privateId')

        if (!privateId) {
            $('.no-privateId').show()
            $('.pre-sale .loading').hide()
            return
        }


        $.get(window.bfio.api + '/air-drop/review/' + privateId)
            .then(function (airDrop) {
                $.get(window.bfio.api + '/air-drop/referrents/' + airDrop.publicId)
                    .then(function (airDrop) {
                        var referralLink = 'https://blockfood.io/airdrop-register#ref=' + airDrop.publicId

                        $('.referral-link').attr('href', referralLink).text(referralLink)

                        if (airDrop.validated) {
                            $('.status').text('Confirmed')
                        } else {
                            $('.status').text('Pending')
                        }

                        if (!airDrop.ethAddress) {
                            $('#airdrop-form').show()
                        }

                        $('.email').text(airDrop.email)
                        $('#airdrop-form .email').val(airDrop.email)
                        $('#airdrop-form .ethAddress').val(airDrop.ethAddress)
                        $('#airdrop-form .telegram').val(airDrop.telegram)
                        $('#airdrop-form .twitter').val(airDrop.twitter)
                        $('#airdrop-form .publicReferral').val(airDrop.publicReferral)
                        $('#airdrop-form .publicBlockfood').val(airDrop.publicBlockfood)
                        $('.privateId').show()
                        $('.pre-sale .loading').hide()


                        var total = 0
                        var totalPending = 0

                        total += rewards.confirmedActions
                        if (!airDrop.validated) {
                            totalPending += rewards.confirmedActions
                        }

                        var firstLevelReferrents = airDrop.referrents
                        var secondLevelReferrents = []
                        var thirdLevelReferrents = []
                        var fourthLevelReferrents = []

                        function gatherChildren(nLevelReferrents, nPlusOneLevelReferrents) {
                            nLevelReferrents.forEach(function (ref) {
                                ref.referrents.forEach(function (secondLevelReferrent) {
                                    nPlusOneLevelReferrents.push(secondLevelReferrent)
                                })
                            })
                        }

                        gatherChildren(firstLevelReferrents, secondLevelReferrents)
                        gatherChildren(secondLevelReferrents, thirdLevelReferrents)
                        gatherChildren(thirdLevelReferrents, fourthLevelReferrents)

                        function countReward(referrents, reward) {
                            return {
                                total: referrents.length * reward,
                                totalPending: referrents.filter(function (ref) {
                                    return !ref.validated
                                }).length * reward
                            }
                        }

                        var firstLevelReward = countReward(firstLevelReferrents, rewards["1LevelReward"])
                        var secondLevelReward = countReward(secondLevelReferrents, rewards["2LevelReward"])
                        var thirdLevelReward = countReward(thirdLevelReferrents, rewards["3LevelReward"])
                        var fourthLevelReward = countReward(fourthLevelReferrents, rewards["4LevelReward"])

                        total += firstLevelReward.total
                        total += secondLevelReward.total
                        total += thirdLevelReward.total
                        total += fourthLevelReward.total

                        totalPending += firstLevelReward.totalPending
                        totalPending += secondLevelReward.totalPending
                        totalPending += thirdLevelReward.totalPending
                        totalPending += fourthLevelReward.totalPending

                        $('.total').text(total)
                        $('.totalPending').text(totalPending)

                        function displayLevelInfo(prefix, referrents, rewards) {
                            $('.' + prefix + 'LevelLength').text(referrents.length)
                            $('.' + prefix + 'LevelTotal').text(rewards.total)
                            $('.' + prefix + 'LevelTotalPending').text(rewards.totalPending)
                        }

                        displayLevelInfo('1st', firstLevelReferrents, firstLevelReward)
                        displayLevelInfo('2nd', secondLevelReferrents, secondLevelReward)
                        displayLevelInfo('3rd', thirdLevelReferrents, thirdLevelReward)
                        displayLevelInfo('4th', fourthLevelReferrents, fourthLevelReward)
                    })
            })

        $('.edit-airdrop .btn').on('click', function () {
            $('#airdrop-form').toggle()
        })


        $('#airdrop-form').submit(function (event) {
            event.preventDefault()
            var form = $('#airdrop-form').get(0)
            var formData = new FormData(form)

            $('.submit-error').hide()

            $.ajax({
                type: 'POST',
                url: window.bfio.api + '/air-drop/edit/' + privateId, // the url where we want to POST
                data: formData, // our data object
                dataType: 'json', // what type of data do we expect back from the server
                processData: false,
                contentType: false
            }).then(function (response) {
                $('.edit-airdrop').show()
                $('#airdrop-form').hide()
            }).catch(function (response) {
                $('.submit-error').show()
                $('.submit-error').text(response.responseJSON.error)
            })
        })

    }

    step1()
}