import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

// CORS ayarları
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// OPTIONS isteği için handler
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(request: Request) {
  try {
    console.log('API endpoint çağrıldı');
    const body = await request.json();
    console.log('Gelen veri:', body);

    const { name, email, phone, message, subject } = body;

    // Veri doğrulama
    if (!name || !email || !phone || !message || !subject) {
      console.log('Eksik veri:', { name, email, phone, message, subject });
      return NextResponse.json(
        { error: 'Tüm alanları doldurun' },
        { status: 400, headers: corsHeaders }
      );
    }

    // Email formatı kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Geçersiz email formatı:', email);
      return NextResponse.json(
        { error: 'Geçerli bir email adresi girin' },
        { status: 400, headers: corsHeaders }
      );
    }

    console.log('Veritabanı bağlantısı test ediliyor...');
    try {
      await prisma.$connect();
      console.log('Veritabanı bağlantısı başarılı');
    } catch (dbError) {
      console.error('Veritabanı bağlantı hatası:', dbError);
      throw dbError;
    }

    console.log('Veritabanına kayıt başlıyor...');
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        message,
        subject,
      },
    });
    console.log('Veritabanı kaydı başarılı:', contact);

    // E-posta gönderimi
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // SMTP bağlantısını test et
    try {
      await transporter.verify();
      console.log('SMTP bağlantısı başarılı');
    } catch (error) {
      console.error('SMTP bağlantı hatası:', error);
      return NextResponse.json(
        { error: 'E-posta gönderimi başarısız: SMTP bağlantı hatası', details: error instanceof Error ? error.message : 'Bilinmeyen hata' },
        { status: 500, headers: corsHeaders }
      );
    }

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: 'Yeni İletişim Formu Mesajı',
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Konu:</strong> ${subject}</p>
        <p><strong>Mesaj:</strong> ${message}</p>
        <p><strong>Gönderim Tarihi:</strong> ${new Date().toLocaleString('tr-TR')}</p>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('E-posta gönderimi başarılı');
    } catch (error) {
      console.error('E-posta gönderim hatası:', error);
      return NextResponse.json(
        { error: 'E-posta gönderimi başarısız', details: error instanceof Error ? error.message : 'Bilinmeyen hata' },
        { status: 500, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      { message: 'Mesajınız başarıyla gönderildi', contact },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error('API hatası:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu', details: error instanceof Error ? error.message : 'Bilinmeyen hata' },
      { status: 500, headers: corsHeaders }
    );
  } finally {
    try {
      await prisma.$disconnect();
      console.log('Veritabanı bağlantısı kapatıldı');
    } catch (disconnectError) {
      console.error('Veritabanı bağlantısı kapatılırken hata:', disconnectError);
    }
  }
} 