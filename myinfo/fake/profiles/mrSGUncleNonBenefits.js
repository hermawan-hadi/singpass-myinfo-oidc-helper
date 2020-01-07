"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "S8399420G";
const name = fake_profile_1.ProfileArchetype.MR_SG_UNCLE_NON_BENEFITS;
exports.mrSGUncleNonBenefits = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.merdekagen.message.code = "1";
        profile.merdekagen.eligibility.value = false;
        profile.gstvoucher.exclusion.value = false;
        profile.gstvoucher.signup.value = false;
        profile.gstvoucher.gstregular.value = 0;
        profile.gstvoucher.gstmedisave.value = 0;
        profile.gstvoucher.gstspecial.value = 0;
        profile.silversupport = {
            "eligibility": {
                "value": false,
            },
            "lastupdated": "2019-04-01",
            "amount": {
                "value": 0,
            },
            "source": "1",
            "classification": "C",
            "year": {
                "value": 2019,
            },
        };
        return profile;
    },
};
//# sourceMappingURL=mrSGUncleNonBenefits.js.map