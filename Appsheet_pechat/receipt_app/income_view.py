from django.shortcuts import render
import random

def income_view(request):
    kirim_id = str(random.randint(100000, 999999))
    zavod = request.GET.get('zavod', '')
    jami_xarid_summasi = request.GET.get('jami_xarid_summasi', '0')
    boshlangich_tolov = request.GET.get('boshlangich_tolov', '0')
    qoldiq_summa = request.GET.get('qoldiq_summa', '0')
    balans = request.GET.get('balans', '0')
    sana = request.GET.get('sana', '')

    mahsulot = request.GET.get('mahsulot', '')
    miqdori = request.GET.get('miqdori', '')
    narxi = request.GET.get('narxi', '')
    summasi = request.GET.get('summasi', '')

    items = []
    if mahsulot and miqdori and narxi and summasi:
        mahsulot_list = [x.strip() for x in mahsulot.split(',') if x.strip()]
        miqdori_list = [x.strip() for x in miqdori.split(',') if x.strip()]
        narxi_list = [x.strip() for x in narxi.split(',') if x.strip()]
        summasi_list = [x.strip() for x in summasi.split(',') if x.strip()]

        min_length = min(len(mahsulot_list), len(miqdori_list), len(narxi_list), len(summasi_list))
        for i in range(min_length):
            items.append({
                'mahsulot': mahsulot_list[i],
                'miqdori': miqdori_list[i],
                'narxi': narxi_list[i],
                'summasi': summasi_list[i],
            })

    context = {
        'kirim_id': kirim_id,
        'zavod': zavod,
        'jami_xarid_summasi': jami_xarid_summasi,
        'boshlangich_tolov': boshlangich_tolov,
        'qoldiq_summa': qoldiq_summa,
        'items': items,
        'balans': balans,
        'sana': sana,
        'firma': 'Yuksalish'
    }
    return render(request, 'income.html', context)