const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn =>
            btn.classList.remove("active")
        );

        contents.forEach(section =>
            section.classList.remove("active")
        );

        tab.classList.add("active");

        const id = tab.dataset.tab;

        document
            .getElementById(id)
            .classList
            .add("active");

    });

});



/* CHART */

const ctx =
document.getElementById(
    "dashboardChart"
);

new Chart(ctx, {

    type: "bar",

    data: {

        labels: [
            "Factory Auto",
            "Plan Approval",
            "Plan Amend",
            "Boiler Reg",
            "Boiler Renew",
            "Factory Reg",
            "Factory Amend",
            "Self Cert",
            "Boiler Manu"
        ],

        datasets: [

            {
                label:"Received",

                data:[
                    10929,
                    4019,
                    286,
                    986,
                    10170,
                    3860,
                    4721,
                    19,
                    3
                ],

                backgroundColor:"#DCE6FF",
                borderRadius:6
            },

            {
                label:"Approved",

                data:[
                    10929,
                    4019,
                    286,
                    986,
                    10170,
                    3860,
                    4721,
                    19,
                    3
                ],

                backgroundColor:"#243D90",
                borderRadius:6
            }

        ]

    },

    options:{

        responsive:true,

        maintainAspectRatio:false,

        plugins:{

            legend:{
                position:"top"
            }
        },

        scales:{

            y:{
                beginAtZero:true,
                grid:{
                    color:"#e5e7eb"
                }
            },

            x:{
                grid:{
                    display:false
                }
            }

        }

    }

});