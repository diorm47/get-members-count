$(document).ready(function () {
  var count_number = 1;

  function getGroupInfoVk(groupId) {
    var apiUrl = "https://api.vk.com/method/groups.getById";
    var accessToken =
      "vk1.a.xDq1ozkVxSYencYxdBEBpkrjF7Wja7DpPclNhV2R66a_P4wA5GigbpU2geOZQqUF2yD1dZQUGRnHh1dzCJv1pKsC6ZiM0CvvqI1fvjEonsF9p3jpcsyDjJh7FiEpw-EKUGzd4urVsTIIsaGY21fTqgqq0tmqS83kOnmbm_fnGC4gz5s9vLbe60hqLQKo4GfZohGvbxYqKRwkOCFEnsNjpg";
    var version = "5.131";

    var requestUrl =
      apiUrl +
      "?group_id=" +
      groupId +
      "&fields=members_count&access_token=" +
      accessToken +
      "&v=" +
      version;

    return $.ajax({
      url: requestUrl,
      type: "GET",
      dataType: "jsonp",
    });
  }

  function getGroupInfoOk(uid) {
    const fields = "members_count";
    const baseUrl = "https://api.ok.ru/fb.do";
    const applicationKey = "CENQJGLGDIHBABABA";
    const sig = "747f36a9ce1daeffd76d925cc4b03a73";
    const accessToken =
      "tkn1s0H0uYMTtJgzvVcQkQ3NbyoS9QRueaWHZp9PuvVNrJWZOttedH2nv2ysCfBK1yow73";
    const url = `${baseUrl}?application_key=${applicationKey}&format=json&method=group.getInfo&uids=${uid}&fields=${fields}&sig=${sig}&access_token=${accessToken}`;

    return $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
    });
  }
  function getChatMembersCountTelegram(chatId) {
    const baseUrl =
      "https://api.telegram.org/bot6260014351:AAEJkiNQ1tsJsYZscPXw3uvjJzsW6lrasjg/getChatMembersCount";
    const url = `${baseUrl}?chat_id=@${chatId}`;

    return $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
    });
  }
  var groups = [
    "public200468972",
    "mo_enem",
    "yablonovskiy_ra_01",
    "public_moafipsipskoe",
    "stb01",
    "club211880138",
    "club211804596",
    "public217215301",
    "public215294356",
    "public212424589",
    "ansambladigi",
    "club215276093",
    "club215315552",
    "muza_dshi",
    "club211773592",
    "public216236266",
    "d_sh_i__tahtamukay",
    "sysobr",
    "enembusinesscentr",
    "public217039608",
    "public215492368",
    "public215295972",
    "club215301640",
    "club215421755",
    "club159775574",
    "public216917849",
    "club216125670",
    "club215441597",
    "public216945157",
    "club211786360",
    "af_school4",
    "mboyscool5",
    "public212529335",
    "club214326982",
    "club215365265",
    "public217061627",
    "public212047403",
    "public212083770",
    "public215437830",
    "public202996322",
    "club211710277",
    "rdsschool15",
    "public208629057",
    "public214268770",
    "n.a_shool_19",
    "public215439074",
    "public216114752",
    "club202063995",
    "public215409938",
    "mbdou_nalmes",
    "club215439775",
    "club215394170",
    "club215313123",
    "public215301997",
    "club215441382",
    "club215315278",
    "public215364374",
    "club215367870",
    "public202996860",
    "club215382470",
    "public215369161",
    "club211636583",
    "public211863142",
    "club209013167",
    "public215371639",
    "public203626389",
    "tmt01ru",
    "public217487250",
    "public217755822",
  ];

  var links = [
    "https://ta01.ru/",
    "http://amoenem.ru/",
    "https://www.adm-yabl01.ru/",
    "https://afipsip01.ru/",
    "https://stb01.ru/",
    "https://tasp01.ru/",
    "https://kozet01.ru/",
    "https://shendgiy01.ru/",
    "https://ta01.ru/комитет-фк-и-спорта",
    "https://kultura-taxtamukai.ru/",
    "http://adigi01.ru/",
    "https://dmt-ta01.ru/",
    "https://dk-fakel.ru",
    "https://muzadshi.ru/",
    "https://afipsipdshi.ru/",
    "https://enemdshi.ru/",
    "http://taxtamukai-dshi.ru/",
    "http://sysobr.ru/",
    "https://www.mcpmp.ru/",
    "https://ta01.ru/комитет-фк-и-спорта",
    "https://ta01.ru/комитет-фк-и-спорта",
    "https://ta01.ru/комитет-фк-и-спорта",
    "https://ta01.ru/комитет-фк-и-спорта",
    "https://ta01.ru/комитет-фк-и-спорта",
    "http://www.тмцбс.рф/",
    "https://mbu-tcks01.ru/",
    "http://sysobr.ru/dopolnitelnoe-obrazovanie/index.php",
    "http://sysobr.ru/sh1",
    "http://sysobr.ru/sh2",
    "http://sysobr.ru/sh3",
    "http://sysobr.ru/sh4",
    "http://sysobr.ru/sh5",
    "http://sysobr.ru/sh6",
    "http://sysobr.ru/sh7",
    "http://sysobr.ru/sh8",
    "http://sysobr.ru/sh9",
    "http://sysobr.ru/sh10",
    "http://sysobr.ru/sh11",
    "http://sysobr.ru/sh12",
    "http://sysobr.ru/sh13",
    "http://sysobr.ru/sh14",
    "http://sysobr.ru/sh15",
    "http://sysobr.ru/sh16",
    "http://sysobr.ru/sh17",
    "http://sysobr.ru/sh19",
    "http://sysobr.ru/sh20",
    "http://sysobr.ru/sh24",
    "http://sysobr.ru/sh25",
    "http://sysobr.ru/sh27",
    "http://sysobr.ru/ds1",
    "http://sysobr.ru/ds2",
    "http://sysobr.ru/ds3",
    "http://sysobr.ru/ds4",
    "http://sysobr.ru/ds5",
    "http://sysobr.ru/ds6",
    "http://sysobr.ru/ds7",
    "http://sysobr.ru/ds8",
    "http://sysobr.ru/ds9",
    "http://sysobr.ru/ds10",
    "http://sysobr.ru/ds11",
    "http://sysobr.ru/ds12",
    "http://sysobr.ru/ds13",
    "http://sysobr.ru/ds14",
    "http://sysobr.ru/ds15",
    "http://sysobr.ru/ds16",
    "https://gazetasoglasie.ru/",
    "https://tmt01.ru/",
    "https://sysobr.ru/imts/",
    "",
  ];
  var ok_groups = [
    "65585356013631",
    "61447539589213",
    "64082898845939",
    "62425640075484",
    "60209719017685",
    "64257968636145",
    "61074670813332",
    "70000001128266",
    "70000000538635",
    "63194682491055",
    "70000000818293",
    "62392503304386",
    "70000000422151",
    "70000000418973",
    "70000000410509",
    "70000001303003",
    "61076659372175",
    "70000000136538",
    "70000000757382",
    "70000001063557",
    "70000000537999",
    "70000000359259",
    "70000000500870",
    "70000000473298",
    "53953780711585",
    "70000000738405",
    "70000000776051",
    "70000000440016",
    "70000001185248",
    "70000000496699",
    "70000000811445",
    "70000000410307",
    "70000000409283",
    "70000000457750",
    "70000000434580",
    "70000000442163",
    "70000000133221",
    "61086541349006",
    "70000000461971",
    "60219072774357",
    "70000000438733",
    "70000000458830",
    "62091761680498",
    "70000000123655",
    "70000000409247",
    "70000000457367",
    "70000000422531",
    "",
    "70000000512998",
    "70000000419229",
    "70000000396473",
    "70000000425853",
    "70000000435688",
    "70000000417164",
    "70000000436100",
    "70000000444493",
    "70000000462961",
    "70000000431528",
    "70000000391240",
    "70000000488052",
    "70000000460726",
    "70000000414690",
    "70000000391156",
    "68698755039291",
    "70000000452245",
    "60510021550293",
    "64268378964208",
    "70000001213030",
    "70000001316025",
  ];

  var tg_chanels = [
    "tahtamukay",
    "enem_admin",
    "yablonovskiy_ra_01",
    "mo_afipsipskoe",
    "starobzhegokay_admin",
    "takhtamukay_news",
    "moikozet",
    "shendjiy",
    "sport_ta01",
    "culture_takhtamukai",
    "aata01ta",
    "dmteatr",
    "culturasportyablonovskiy",
    "muza_dshi",
    "afipsip_dshi1981",
    "enemdshi",
    "taxtamukaidshi",
    "sysobr_ru",
    "BusinessCentrenem",
    "mfok_nart",
    "sportsshkola1_tahtamukay",
    "sport_enem",
    "sportschoolyab",
    "",
    "tahtamukaiskiebiblioteki",
    "mbu_tcks",
    "cdoddthr",
    "school_1_takhtamukai",
    "",
    "school3yablonov",
    "school4_afipsip",
    "mboyshN5",
    "school6_enem",
    "scola7panahes",
    "skola_8pseituk",
    "sosch_9_otradny",
    "kozet10",
    "thrN11",
    "school_12_official",
    "mbousch13novyi",
    "mbou_sh14",
    "sch15yablonovskiy",
    "osch16",
    "school17_enem",
    "school_19_n_adyg",
    "school20novsad",
    "school24shengij",
    "sh25enem",
    "school27nov_adyg",
    "nalmes01",
    "malyshook",
    "mbdou3daxabn",
    "nasyp4",
    "mbdou5kalinka",
    "mbdou6ivushka1",
    "krasnayashapochka7",
    "skazka8mbdou",
    "mbdoy09teremok",
    "Rucheek_10",
    "dumovochka11",
    "mbdoy_12",
    "mbdou_13_vishenka",
    "sunshaine14",
    "mbdou15_nebzuy",
    "mbdou16nafset",
    "gazeta_soglasie",
    "tmt01ru",
    "mkuimc",
    "kultura_enem",
  ];
  var org_name = ["Apple", "Amazon", "Юнеско"];
  var responsible_person = ["Иван Иванов", "Байден", "Каримов"];
  var phone_number = ["112231132134", "132423443", "123441234431"];
  var email = ["test@gmail.com", "test1@gmail.com", "test1@gmail.com"];

  var tableBody = $("#groupTable tbody");
  var vk_gr_sum = 0;
  var ok_gr_sum = 0;
  var tg_ch_sum = 0;
  var total_sum = 0;
  function processGroups(index) {
    if (index >= groups.length) {
      tableBody.append(
        '<tr class="row_block"><td colspan="3">Общая сумма</td><td class="bottom_count">' +
          vk_gr_sum +
          '</td><td></td><td class="bottom_count">' +
          ok_gr_sum +
          '</td><td></td><td class="bottom_count">' +
          tg_ch_sum +
          '</td><td class="bottom_count">' +
          total_sum +
          "</td></tr>"
      );
      return;
    }

    var groupIdVk = groups[index];
    var linksId = links[index];
    var groupIdOk = ok_groups[index];
    var tg_chanel = tg_chanels[index];
    var org_names = org_name[index];
    var responsible_p = responsible_person[index];
    var ph_numbers = phone_number[index];
    var emails = email[index];
    var row = $("<tr class='row_block'>");
    var sumCell = $("<td class='sum'>");
    getGroupInfoVk(groupIdVk)
      .done(function (response) {
        console.log(response);
        var group = response.response[0];
        if (group) {
          var groupIdCell = $("<td class='group_id'>").append(
            $("<a>")
              .attr("href", `https://vk.com/${group.screen_name}`)
              .attr("target", "_blank") // Открываем в новом окне
              .text(`https://vk.com/${group.screen_name}`)
          );
          var ok_grCell = $("<td class='site_link'>").append(
            $("<a >")
              .attr("href", `https://ok.ru/group/${groupIdOk}`)
              .attr("target", "_blank") // Открываем в новом окне
              .text(`https://ok.ru/group/${groupIdOk}`)
          );
          var linkCell = $("<td class='site_link'>").append(
            $("<a>")
              .attr("href", linksId)
              .attr("target", "_blank") // Открываем в новом окне
              .text(linksId)
          );
          var groupNameCell = $("<td>").text();
          var count_num = $("<td class='count_number'>").text(count_number++);
          var membersCountCell = $("<td class='count'>").text(
            group.members_count
          );
          var organizations = $("<td class='ta_canter'>").text(org_names);
          var responsible_persons = $("<td class='ta_canter'>").text(
            responsible_p
          );

          var phone_numbers = $("<td class='ta_canter'>").append(
            $("<a>")
              .attr("href", `tel:+${ph_numbers}`)
              .attr("target", "_blank") // Открываем в новом окне
              .text(`+ ${ph_numbers}`)
          );
          var emails_row = $("<td class='ta_canter'>").append(
            $("<a >")
              .attr("href", `mailto:${emails}`)
              .attr("target", "_blank") // Открываем в новом окне
              .text(emails)
          );

          vk_gr_sum += group.members_count;

          row.append(
            count_num,
            linkCell,
            groupIdCell,
            groupNameCell,
            membersCountCell,
            ok_grCell
          );

          getGroupInfoOk(groupIdOk)
            .done(function (response) {
              var okGroup = response[0];
              var tg_chanels = $("<td class='site_link'>").append(
                $("<a>")
                  .attr("href", `https://t.me/${tg_chanel}`)
                  .attr("target", "_blank")
                  .text(`https://t.me/${tg_chanel}`)
              );
              if (okGroup) {
                var okMembersCountCell = $("<td class='count'>").text(
                  okGroup.members_count
                );
                ok_gr_sum += okGroup.members_count;
                row.append(okMembersCountCell, tg_chanels);
              } else {
                row.append('<td class="error">-</td>', tg_chanels);
              }
              getChatMembersCountTelegram(tg_chanel)
                .done(function (telegramResponse) {
                  var telegramMembersCount = telegramResponse.result; // Получаем количество участников чата в Telegram
                  tg_ch_sum += telegramMembersCount;
                  var telegramMembersCountCell =
                    $("<td class='count'>").text(telegramMembersCount);
                  var sum = 0;

                  setTimeout(function () {
                    row.find(".count").each(function () {
                      var value = $(this).text();
                      value = parseInt(value, 10);
                      sum += value;
                    });
                    total_sum += sum;
                    sumCell.text(sum);
                  }, 100);
                  row.append(
                    telegramMembersCountCell,
                    sumCell,
                    organizations,
                    responsible_persons,
                    phone_numbers,
                    emails_row
                  );
                })
                .fail(function () {
                  var sum = 0;
                  row.find(".count").each(function () {
                    var value = $(this).text().trim();
                    value = parseInt(value, 10);
                    sum += value;
                  });
                  total_sum += sum;
                  sumCell.text(sum);
                  row.append(
                    '<td class="error">-</td>',
                    sumCell,
                    organizations,
                    responsible_persons,
                    phone_numbers,
                    emails_row
                  );
                });
            })
            .fail(function () {
              row.append('<td class="error">Ошибка.</td>');
            });
          $("#myTable").append(
            '<tr><td colspan="4">Общая сумма</td><td>' +
              vk_gr_sum +
              "</td><td></td></tr>"
          );
        } else {
          row.html('<td colspan="4"></td>');
        }
      })
      .fail(function (error) {
        row.html('<td colspan="4">Ошибка при получение данных.</td>');
      })
      .always(function () {
        tableBody.append(row);
        setTimeout(function () {
          processGroups(index + 1);
        }, 200);
      });
  }

  processGroups(0);
});
