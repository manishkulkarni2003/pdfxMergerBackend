package com.pdf.fileRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pdf.Fileentity.fileRecord;

public interface fileRecordRepo extends JpaRepository<fileRecord,Long> {

}
