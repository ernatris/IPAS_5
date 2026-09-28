<?php
// Isi sesuai database di hosting Anda
$DB = ['host'=>'localhost','name'=>'NAMA_DATABASE','user'=>'USER_DATABASE','pass'=>'PASSWORD_DATABASE'];
header('Content-Type: application/json; charset=utf-8');
try {
  $pdo = new PDO("mysql:host={$DB['host']};dbname={$DB['name']};charset=utf8mb4", $DB['user'], $DB['pass'],
    [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
  $in = json_decode(file_get_contents('php://input'), true) ?: [];
  $act = $_GET['a'] ?? ($in['a'] ?? '');
  if ($act === 'daftar' || $act === 'skor') {
    $nama = mb_substr(trim($in['nama'] ?? ''), 0, 100);
    $sek  = mb_substr(trim($in['sekolah'] ?? ''), 0, 150);
    if ($nama === '' || $sek === '') { echo json_encode(['ok'=>false]); exit; }
    $pdo->prepare("INSERT IGNORE INTO siswa (nama, sekolah) VALUES (?,?)")->execute([$nama, $sek]);
    $st = $pdo->prepare("SELECT id FROM siswa WHERE nama=? AND sekolah=?"); $st->execute([$nama, $sek]);
    $id = $st->fetchColumn();
    if ($act === 'skor') {
      $bab = max(1, min(8, (int)($in['bab'] ?? 0))); $nilai = max(0, min(20, (int)($in['nilai'] ?? 0)));
      $pdo->prepare("INSERT INTO skor (siswa_id, bab, nilai) VALUES (?,?,?)
        ON DUPLICATE KEY UPDATE nilai = GREATEST(nilai, VALUES(nilai))")->execute([$id, $bab, $nilai]);
    }
    echo json_encode(['ok'=>true]);
  } elseif ($act === 'rank') {
    $rows = $pdo->query("SELECT s.nama, s.sekolah, SUM(k.nilai) total, COUNT(k.bab) jml
      FROM siswa s JOIN skor k ON k.siswa_id=s.id GROUP BY s.id ORDER BY total DESC, jml DESC, MIN(k.updated_at) LIMIT 50")->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(['ok'=>true, 'data'=>$rows]);
  } else { echo json_encode(['ok'=>false]); }
} catch (Exception $e) { http_response_code(500); echo json_encode(['ok'=>false]); }
