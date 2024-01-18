import React from 'react'

export default function PlatformCatalog() {
  return (
    <div className="filter dm-none">
    <h2>Filtrele</h2>
    <hr className="mt-0" />

    {/* Bana Özel Button */}
    <button className="mb-3 w-100" type="button" aria-expanded="false" style={{ border: '2px solid rgb(153, 51, 255)', borderRadius: '50px', padding: '8px 16px', color: 'rgb(24, 24, 24)', fontWeight: '600', textAlign: 'left', backgroundColor: 'white' }}>
      <div className="w-100"><span>Bana Özel</span></div>
    </button>

    {/* Kategori Accordion */}
    <div className="accordion" id="accordiSevenxample">
      <div className="accordion-item filter-accordion">
        <h2 className="accordion-header" id="headingSeven">
          <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
            <div className="title w-100"><span>Kategori</span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7.5L10 12.5L15 7.5" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
          </button>
        </h2>
        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordiSevenxample">
          <div className="accordion-body filter-accordion-body">
            {/* Kategori Accordion İçeriği */}
            <input type="text" className="form-control mt-5 mb-3" placeholder="Arama" />
            <ul>
              <li><a><input className="form-check-input" type="radio" name="cat" value="-1" checked /> Tüm Eğitimler</a></li>
              <li><a><input className="form-check-input" type="radio" name="cat" value="1" /> Ücretli Eğitimler</a></li>
              <li><a><input className="form-check-input" type="radio" name="cat" value="0" /> Ücretsiz Eğitimler</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Diğer Accordion Bileşenleri (Eğitimler, Seviye, Konu, Yazılım Dili, Eğitmen, Durum) */}
    {/* ... DİĞER ACCORDİON BİLEŞENLERİNİN JSX DÖNÜŞÜMLERİNİ EKLEYİN ... */}
  </div>

  )
}
