export default function HizmetlerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Hizmetlerimiz</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Harita ve Ölçüm Hizmetleri */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Harita ve Ölçüm Hizmetleri</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Arazi ve Arsa Ölçümleri</li>
            <li>• GPS ile Hassas Konum Belirleme</li>
            <li>• Topografik Haritalama</li>
            <li>• Kadastro Çalışmaları</li>
            <li>• 3D Modelleme ve Görselleştirme</li>
          </ul>
        </div>

        {/* İnşaat ve Yapı Hizmetleri */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">İnşaat ve Yapı Hizmetleri</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Yapı Ruhsatı ve Proje Hazırlama</li>
            <li>• Statik ve Betonarme Hesapları</li>
            <li>• Yapı Denetim Hizmetleri</li>
            <li>• Zemin Etüdü ve Analizi</li>
            <li>• Yapı Güçlendirme Projeleri</li>
          </ul>
        </div>

        {/* Altyapı Projeleri */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Altyapı Projeleri</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Yol ve Köprü Projeleri</li>
            <li>• İçme Suyu ve Kanalizasyon</li>
            <li>• Elektrik ve Telekomünikasyon</li>
            <li>• Peyzaj Düzenlemeleri</li>
            <li>• Şehir Planlama Çalışmaları</li>
          </ul>
        </div>

        {/* Endüstriyel Tesisler */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Endüstriyel Tesisler</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Fabrika ve Depo Projeleri</li>
            <li>• Endüstriyel Tesis Kurulumu</li>
            <li>• Makine ve Ekipman Yerleşimi</li>
            <li>• Üretim Hattı Optimizasyonu</li>
            <li>• Güvenlik ve İş Güvenliği</li>
          </ul>
        </div>

        {/* Çevre ve Sürdürülebilirlik */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Çevre ve Sürdürülebilirlik</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Çevresel Etki Değerlendirmesi</li>
            <li>• Enerji Verimliliği Projeleri</li>
            <li>• Atık Yönetimi Sistemleri</li>
            <li>• Yeşil Bina Sertifikasyonu</li>
            <li>• Sürdürülebilir Tasarım</li>
          </ul>
        </div>

        {/* Danışmanlık Hizmetleri */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Danışmanlık Hizmetleri</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Proje Yönetimi</li>
            <li>• Teknik Danışmanlık</li>
            <li>• Maliyet Analizi</li>
            <li>• Risk Değerlendirmesi</li>
            <li>• Kalite Kontrol</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 